import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule, Location } from '@angular/common';
import { UserdataService } from '../../services/userdata.service';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    CommonModule,
    MenubarModule
  ]
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  isAuthenicated: boolean = false;
  username:string | undefined;

  auth = inject(AuthService);
  router = inject(Router);
  loc = inject(Location);
  user = inject(UserdataService);

  backStep(){
   return this.loc.back()
  }

  async ngOnInit() {
    if(this.isAuthenicated){
      this.items = [
        {
          label: 'Back',
          icon: 'pi pi-fw pi-angle-left',
          command:()=>this.backStep()
        },
        {
          label: 'Create Event',
          icon: 'pi pi-fw pi-calendar',
          command:()=>{this.router.navigate(['/event'])}
        },
        {
          label: 'Team Information',
          icon: 'pi pi-fw pi-users',
          command:()=>{this.router.navigate(['/members'])}
        },
        
          {
            label: 'Sign Out',
            icon: 'pi pi-fw pi-power-off',
            command:()=>this.signOutbtn()
          },
        
      ];
    }else{
      this.items = [
        {
          label: 'Back',
          icon: 'pi pi-fw pi-angle-left',
          command:()=>this.backStep()
        },
        {
          label: 'Team Information',
          icon: 'pi pi-fw pi-users',
          command:()=>{this.router.navigate(['/members'])}
        },
        
        {
          label: 'Sign In',
          icon: 'pi pi-fw pi-sign-in',
          command:()=>{this.router.navigate(['/auth/sign-in'])}
        },
      ];
    }
    

    this.isAuthenicated = this.auth.checkStatus();
    const user=await this.user.getData()
    this.username=user?.['name'];
  }



  async signOutbtn() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/auth']);
    });
    return await this.auth.signoutUser()
  }

}
