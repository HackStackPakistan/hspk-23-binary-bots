import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

export const authguardGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService)
  const router = inject(Router);

  const param = state.url.slice(1, 5) === "auth";

  if (param && !auth.checkStatus()) {
    return true;
  }

  if (!param && auth.checkStatus()) {
    return true;
  }

  router.navigate(["/"])
  return false;

};
