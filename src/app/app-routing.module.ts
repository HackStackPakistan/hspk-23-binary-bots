import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    
  },

  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
    pathMatch:"full"
  },

  {
    
    path: 'members',
    loadChildren: () => import("./member/member.module").then(m => m.MemberModule),
    
  },
  {
    
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then(m => m.GetStartedModule),
  },

  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then(m => m.EventModule),
  },
  {
    path: "**",
    redirectTo: "/"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
