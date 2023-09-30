import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore,Timestamp,addDoc,collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  getUserId(): string | undefined {
    return this.auth.currentUser?.uid;
  }

  constructor(
    private auth: Auth,
    private db: Firestore,
    private fs: Firestore
  ) {}

  

  async setEventInfo(payload: {
    name: string;
    
    gender: string;
    biography: string;
    title:string;
    dateOfcreation:Timestamp;
    interests:string;
    description:string;
    location:string;
    cities:string;
    timeNDate:object;
  }){
    const createdBy = this.getUserId();
    if (createdBy) {
      const { title,interests,description,location,cities,timeNDate,dateOfcreation} = payload;
      const eventRef = collection(this.fs, 'events');
     await addDoc(eventRef,{dateOfcreation, createdBy,title,interests,description,location,cities,timeNDate,});
     return;
    }
  }


}
