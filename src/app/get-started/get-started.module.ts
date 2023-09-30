import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';

import { GetStartedService } from './services/get-started.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GetStartedRoutingModule
  ],
  providers: [
    GetStartedService
  ]
})
export class GetStartedModule { }
