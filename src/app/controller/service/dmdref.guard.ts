import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TypeParameterGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const type = route.paramMap.get('type');

    if (type !== "SST") {
      this.router.navigate(['/']); // Redirect to the home page
      return false; // Prevent access to the route
    }

    return true; // Allow access to the route
  }
}
