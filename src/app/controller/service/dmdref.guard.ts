import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TypeParameterGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const type = route.paramMap.get('type');

    return (type == "SST") || (type == "FOU");

    // Allow access to the route
  }
}
