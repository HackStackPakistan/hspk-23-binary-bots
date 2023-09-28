import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, RouterModule, RouteReuseStrategy } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    CommonModule
  ]
})
export class NavbarComponent implements OnInit {

  isAuthenicated: boolean = false;

  auth = inject(AuthService);
  router = inject(Router);
  route = inject(RouteReuseStrategy);

  ngOnInit() {

    this.isAuthenicated = this.auth.checkStatus();
  }



  async signOutbtn() {

    this.router.navigateByUrl('/auth', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
    return await this.auth.signoutUser()
  }


}
