import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Auth,signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
// import { configDotenv } from "dotenv";


// import{firest}
// configDotenv();
// import{firest}
// process.env['LOGGING_THIS'];

// const Authi=getAuth();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angfor';

  constructor(private auth: AuthService,private auth2:Auth) { }



  inSubmission = false;
  async putData() {

  }

  async signIn(){
    
    try{
      await signInWithEmailAndPassword(this.auth2,"smahs@gmail.com","2233232")
    }catch(e){

    }
  }

  async logout(){
    await signOut(this.auth2)
    console.log()
  }

  async register() {
    
    try {

      await this.auth.createUser();
      
      this.inSubmission = true;
    }

    catch (e) {
      console.log("HaingHardTime")
    }
  }
}
