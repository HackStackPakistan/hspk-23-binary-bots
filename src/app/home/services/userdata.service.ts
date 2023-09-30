import { Injectable } from '@angular/core';
import { Firestore, doc, deleteDoc, getDoc, getDocs, collection, DocumentData, orderBy } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(
    private auth: Auth,
    private db: Firestore,
    private fs: Firestore
  ) { }

  getid(){
    const local: string | null = localStorage.getItem("userInfo");
    if (local == null) return;
    const uid = JSON.parse(local).uid;
    return uid;
  }

  async getData() {

    try{

    }catch(e){

    }
    
    const uid=this.getid();
    const userRef = doc(this.db, "users", uid);

    const docSnap = await getDoc(userRef);
    const data =  docSnap.data()
    return data;

  }

  async getEvents() {


    const docs: DocumentData[]=[];
    
    const querySnapshot = await getDocs(collection(this.db, "events"));
    const gen = querySnapshot.forEach((doc) => {
      const data = doc.data();
      data['id']=doc.id
      docs.push(data);
      return data;
    });

    return docs;
  }

  async deleteEvent(id:string){
    await deleteDoc(doc(this.db, "events", id));
  }


}
