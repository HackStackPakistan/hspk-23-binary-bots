import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { UserdataService } from '../../services/userdata.service';

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
  username:string | undefined;

  auth = inject(AuthService);
  router = inject(Router);
  user = inject(UserdataService);

  async ngOnInit() {

    this.isAuthenicated = this.auth.checkStatus();
    const user=await this.user.getData()
    this.username=user?.['name'];
  }



  async signOutbtn() {

    this.router.navigateByUrl('/auth', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
    return await this.auth.signoutUser()
  }


}
