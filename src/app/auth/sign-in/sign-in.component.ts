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
import { MessageService } from 'primeng/api';

import { NgIf } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { FirebaseError } from '@angular/fire/app';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
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
  providers: [MessageService],
})
export class SignInComponent {
  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isAPIBeingCalled: boolean = false;

  authService = inject(AuthService);
  toastService = inject(MessageService);

  async loginUser() {
    try {
      this.isAPIBeingCalled = true;

      const { email, password } = this.signInForm.value;

      const loggedInUser = await this.authService.loginUser(email, password);

      if (loggedInUser) {
        this.toastService.add({ severity: 'success', summary: 'Success', detail: 'Logged in successfully!' });

        const user = loggedInUser.user;
        const accessToken: string = await user.getIdToken();

        localStorage.setItem("userInfo", JSON.stringify({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email
        }));

        localStorage.setItem("accessToken", accessToken);
      }
    } catch (error: FirebaseError | unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.toastService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'An account already exists with same email!',
            });
            break;
          case 'auth/invalid-email':
            this.toastService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Invalid email entered!',
            });
            break;
          case 'auth/weak-password':
            this.toastService.add({
              severity: 'error',
              summary: 'Error',
              detail: "Password entered wasn't strong enough!",
            });
            break;
          case 'auth/invalid-login-credentials':
            this.toastService.add({
              severity: 'error',
              summary: 'Error',
              detail: "Invalid credentails were provided!",
            });
            break;
        }
      }
    } finally {
      this.isAPIBeingCalled = false;
    }
  }
}
