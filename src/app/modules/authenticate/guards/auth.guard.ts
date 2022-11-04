import { environment } from 'src/environments/environment';
import { LoginService } from './../../../shared/services/login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(): boolean {
    if (localStorage.getItem(environment.Token)) {
      return true;
    } else {
      this.router.navigate(["/login"])
      return false
    }
  }

}
