import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) { }

  public isAuthenicated:boolean=false;
  public isAPIBeingCalled:boolean=true;
  

  
  checkStatus(): boolean {
    
    
    if (localStorage.getItem("accessToken") && localStorage.getItem("userInfo")) {
      this.isAuthenicated=true;
      return true;
    }
    else {
      this.isAuthenicated=false;
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

  async signoutUser(){
    localStorage.clear();
    return await signOut(this.auth)
  }

  async loginUser(email: string, password: string) {
    return await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    )
  }
}

