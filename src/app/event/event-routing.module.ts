import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authguardGuard } from '../shared/authguard.guard';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./event.component").then(m=>m.EventComponent),
    canActivate: [authguardGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
