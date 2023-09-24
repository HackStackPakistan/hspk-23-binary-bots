import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

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
