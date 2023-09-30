import { Component, inject } from '@angular/core';

import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { GetStartedService } from '../../services/get-started.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  standalone: true,
  imports: [
    /* COMMON MODULES */
    CommonModule,
    /* PRIMENG */
    CardModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    ToastModule,
    /* FORM */
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MessageService],
})
export class PersonalInformationComponent {
  personalInfoFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(55)]),
    gender: new FormControl(undefined, [Validators.required]),
    biography: new FormControl('', [Validators.required, Validators.min(50)]),
  });

  genders: { label: string; value: string }[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' }
  ]

  isAPIBeingCalled: boolean = false;

  getStartedService = inject(GetStartedService);
  toastService = inject(MessageService);

  getErrorMessages(key: string) {
    let message: string = '';

    switch (key) {
      case "age":
        if (this.personalInfoFormGroup.get('age')?.hasError('min')) message = "You're quite young for meetups, aren't you?";
        if (this.personalInfoFormGroup.get('age')?.hasError('max')) message = "You're waaaay too old for meetups.";
        if (!this.personalInfoFormGroup.get('age')?.value) message = "This field is required";
        break;
      case "name":
        if (!this.personalInfoFormGroup.get('name')?.value) message = "This field is required";
        break;
      case "biography":
        if (!this.personalInfoFormGroup.get('biography')?.value) message = "This field is required";
        break;
    }

    return message;
  }
  router = inject(Router);

  async nextPage() {
    try {
      this.isAPIBeingCalled = true;

      await this.getStartedService.setPersonalInfo(this.personalInfoFormGroup.value);
    } catch (error) {
      this.toastService.add({
        severity: 'error',
        summary: 'Error',
        detail: "Something went wrong while trying to update the profile!",
      });
    } finally {
      this.router.navigate(['/']);
      this.isAPIBeingCalled = false;
    }
  }
}
