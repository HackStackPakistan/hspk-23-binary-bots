import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./get-started.component").then(m => m.GetStartedComponent),
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
    redirectTo: "get-started/personal-info"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetStartedRoutingModule { }
