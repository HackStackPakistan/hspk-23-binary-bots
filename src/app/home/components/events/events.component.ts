import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserdataService } from '../../services/userdata.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    
  ],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  dataLists: any;
  uid: string | undefined;
date=new Date();


  auth = inject(Auth);
  constructor(private userService: UserdataService,) { }

  async ngOnInit() {
    

    this.uid = this.userService.getid();
    this.dataLists = await this.userService.getEvents();
    this.dataLists.map((m: any) => 
    {
      m["time"]=this.date.toLocaleString('en-us',{dateStyle:"medium"});
      m["date"]= this.date.toLocaleString('en-us',{hour:'numeric',hour12:true});
      m["owner"] = (m['createdBy'] == this.uid)
      return this.dataLists
    })

  }

  async deleteDoc(id: string) {
    await this.userService.deleteEvent(id);
    this.ngOnInit();
    return;
  }

}
