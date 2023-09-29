import { Injectable } from '@angular/core';
import { Firestore,doc,onSnapshot,getDoc,getDocs,collection } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(
    private auth: Auth,
    private db: Firestore,
    private fs: Firestore
  ) {}

  async getData(){
    
    const local:string|null=localStorage.getItem("userInfo");
    if(local==null)return;
    const uid=JSON.parse(local).uid;
    const userRef=doc(this.db, "users",uid);
  
  const docSnap = await getDoc(userRef);
  const data=await docSnap.data()
  return data;
  
  }

  async getEvent(){

    console.log("trigger");
    const querySnapshot = await getDocs(collection(this.db, "events"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

  }


}
