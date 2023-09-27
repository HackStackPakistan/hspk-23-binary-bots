import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authguardGuard } from '../shared/authguard.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
          canActivate:[authguardGuard]
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./sign-in/sign-in.component').then((m) => m.SignInComponent),
          canActivate:[authguardGuard]
          
      },
      {
        path: '**',
        redirectTo: 'sign-in',
        
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
