import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenservice: TokenService,
    private router: Router,
    private authservice: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // const token = this.tokenservice.getToken();
    // if (token) {
    //   return true;
    // }
    // this.router.navigate(['/home']);
    // return false;
    return this.authservice.user$.pipe(
      map((user) => {
        if (user) {
          return true;
        }
        this.router.navigate(['/home']);
        return false;
      })
    );
  }
}
