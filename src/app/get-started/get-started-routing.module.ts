import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authguardGuard } from '../shared/authguard.guard';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./get-started.component").then(m => m.GetStartedComponent),
    canActivate: [authguardGuard],
    children: [
      {
        path: '',
        redirectTo: 'personal-info',
        pathMatch: 'full'
      },
      { path: 'personal-info', loadComponent: () => import('./components/personal-information/personal-information.component').then(m => m.PersonalInformationComponent) },
      { path: 'interests', loadComponent: () => import('./components/interests/interests.component').then(m => m.InterestsComponent) },
    ],
  },
  {
    path: "*",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetStartedRoutingModule { }
