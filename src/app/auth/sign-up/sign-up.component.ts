import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [
    /* FORM MODULE */
    ReactiveFormsModule,
    FormsModule,
    /* PRIMENG */
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    ToastModule,
    /* ROUTER */
    RouterModule,
    /* ngIf */
    NgIf,
  ],
  providers: [
    MessageService
  ]
})
export class SignUpComponent {
  signUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isAPIBeingCalled: boolean = false;

  authService = inject(AuthService);
  toastService = inject(MessageService);
  router = inject(Router);


  onKeyDown($event: string){
    if($event==="Enter"){
      return this.createUser();
    }
    return;
  }

  async createUser() {
    try {
      this.isAPIBeingCalled = true;

      const { email, password } = this.signUpForm.value;

      await this.authService.checkIfUserExists(email);

      const createdUser = await this.authService.createUser(email, password);
      
      if (createdUser) {
        const user = createdUser.user;
        const accessToken: string = await user.getIdToken();

        if (user) {
          this.toastService.add({ severity: 'success', summary: 'Success', detail: 'Viola! You are registered with us!' });

          localStorage.setItem("userInfo", JSON.stringify({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email
          }));

          localStorage.setItem("accessToken", accessToken);
          
        }
      }
    } catch (error: FirebaseError | unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.toastService.add({ severity: 'error', summary: 'Error', detail: 'An account already exists with same email!' });
            break;
          case 'auth/invalid-email':
            this.toastService.add({ severity: 'error', summary: 'Error', detail: 'Invalid email entered!' });
            break;
          case 'auth/weak-password':
            this.toastService.add({ severity: 'error', summary: 'Error', detail: "Password entered wasn't strong enough!" });
        }
      }

      
      this.authService.isAPIBeingCalled = false;
      this.router.navigate(['/not-found']);
    } finally {
      this.router.navigate(['/get-started/personal-info']);
    }
  }
}