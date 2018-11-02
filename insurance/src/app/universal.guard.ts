import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<any> {
  
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean {
      const url = currentState.root.url;
      var value = window.confirm("Are you sure");
      
      if (!value) {
        console.log(component);
        console.log(currentRoute);
        console.log(currentState);
        console.log(sessionStorage);
        this.route.navigate(url);
      }
      return value;
  }


  constructor(private route:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      let allow = false;
      if(sessionStorage.getItem('logged') == 'true') {
          allow = true;
      } else {
        this.route.navigate(['/login', 'Logged user can only access this page']);
      }
    return allow;
  }

}
