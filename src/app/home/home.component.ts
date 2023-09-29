import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { EventsComponent } from './components/events/events.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports:[
    NavbarComponent,
    SidepanelComponent,
    EventsComponent
  ]
})
export class HomeComponent {

}
