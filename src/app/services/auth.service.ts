// import { Injectable } from '@angular/core';
// import { Firestore, setDoc } from '@angular/fire/firestore';
// import { doc } from '@angular/fire/firestore';
// import { Auth,createUserWithEmailAndPassword, user } from '@angular/fire/auth';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';



// @Injectable({
//   providedIn: 'root'
// })

// export class AuthService {

//   public isAuthenicated$: Observable<Boolean>;

//   constructor(private auth:Auth,private db:Firestore) { 

//     this.isAuthenicated$=user(auth).pipe(
//       map(user=>!!user))
//   }
  

  
//   public async createUser(){
    
//     const UserCred = await createUserWithEmailAndPassword(this.auth,"smahs@gmail.com","2233232");
//     if(!UserCred.user.uid) return;

//     await setDoc(doc(this.db, "users", UserCred.user.uid), {
//       fullName: "discor",
//       bio:"sdsdds" ,
//       profileImage: "sdsdsdsd",
//       interests:["sddsds"],
//       age:23,
//       gender:"Female",
//       address:"sdsd",
//       creditToken:0,
//       createdEvents:[],
//       attendedEvents:[{e:true}],
//       id:232323
//     });
//   }


//   public async createEvent(){
    
//     const UserCred = await createUserWithEmailAndPassword(this.auth,"smahs@gmail.com","2233232");
//     if(!UserCred.user.uid) return;

//     await setDoc(doc(this.db, "events", UserCred.user.uid), {
//       fullName: "discor",
//       bio:"sdsdds" ,
//       profileImage: "sdsdsdsd",
//       interests:["sddsds"],
//       age:23,
//       gender:"Female",
//       address:"sdsd",
//       creditToken:0,
//       createdEvents:[],
//       attendedEvents:[{e:true}],
//       id:232323
//     });
//   }
// }
