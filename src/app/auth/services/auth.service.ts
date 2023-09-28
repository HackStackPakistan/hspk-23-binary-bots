import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) { }

  router = inject(Router);


  checkStatus(): boolean {
    
    if (localStorage.getItem("accessToken") && localStorage.getItem("userInfo")) {
      return true;
    }
    else {
      return false;
    }
  }


  async checkIfUserExists(email: string) {
    return await fetchSignInMethodsForEmail(
      this.auth,
      email
    );
  }

  async createUser(email: string, password: string) {
    return await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
  }

  async loginUser(email: string, password: string) {
    return await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    )
  }
}

