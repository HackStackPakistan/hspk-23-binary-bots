import { Component } from '@angular/core';
import { members } from './members';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hspk-23-binary-bots';
  members = members;

  redirectTo(url:string){
    
    window.open(url, '_blank');
  }
}
