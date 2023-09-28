import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';
import { NavbarComponent } from '../home/components/navbar/navbar.component';
import { GetStartedService } from './services/get-started.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GetStartedRoutingModule,
    NavbarComponent
  ],
  providers: [
    GetStartedService
  ]
})
export class GetStartedModule { }
