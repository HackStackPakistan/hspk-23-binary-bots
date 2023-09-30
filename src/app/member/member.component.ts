import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { members,mentors } from './data/members';
import { NavbarComponent } from '../home/components/navbar/navbar.component';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
  CommonModule,
  NavbarComponent
],
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  members = members;
  mentors = mentors;


  redirectTo(url:string){
    
    window.open(url, '_blank');
  }
}
