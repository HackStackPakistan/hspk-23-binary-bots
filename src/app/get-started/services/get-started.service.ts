import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  setDoc,
  doc,
  addDoc,
  collection,
  CollectionReference,
  DocumentReference,
} from '@angular/fire/firestore';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

interface StepsIndex {
  items: MenuItem[];
  index: number;
}

@Injectable({
  providedIn: 'root',
})
export class GetStartedService {
  stepsItems: BehaviorSubject<StepsIndex> = new BehaviorSubject<StepsIndex>({
    items: [
      {
        label: 'Personal Information',
        routerLink: 'personal-info',
      },
      {
        label: 'Interests',
        routerLink: 'interests',
        disabled: true,
      },
      {
        label: 'Experience',
        routerLink: 'interests',
        disabled: true,
      },
    ],
    index: 0,
  });

  getUserId(): string | undefined {
    return this.auth.currentUser?.uid;
  }

  constructor(
    private auth: Auth,
    private db: Firestore,
    private fs: Firestore
  ) {}

  async setPersonalInfo(payload: {
    name: string;
    age: number;
    gender: string;
    biography: string;
  }) {
    const uId = this.getUserId();

    if (uId) {
      const { name, age, gender, biography } = payload;

      const usersRef = collection(this.fs, 'users');

      return setDoc(doc(usersRef, uId), { name, age, gender, biography});
    }
  }
}
