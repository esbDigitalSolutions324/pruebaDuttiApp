import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardLogGuard implements CanActivate {
constructor(
  private _auth: AuthService, 
  private router: Router){

}

canActivate() {
  return this._auth.user$.pipe(
    take(1),
    map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    })
  );
}
  
}
