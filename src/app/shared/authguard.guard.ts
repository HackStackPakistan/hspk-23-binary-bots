import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state,router: Router = inject(Router),) => {
  
  
  if(localStorage.getItem("accessToken")&&localStorage.getItem("userInfo")){
    router.navigate(['/']);
    return false
  }
  else{
    return true;
  }
  
};
