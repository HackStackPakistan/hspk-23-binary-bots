import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  constructor(private userService:UserdataService){}
  async getEvents() {

    this.userService.getEvent()
  }


  

 

}
