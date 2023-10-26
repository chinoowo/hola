import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class E404Guard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Verifica si la ruta es desconocida ('**')
        if (route.routeConfig && route.routeConfig.path === '**') {
            // Redirige a la página de inicio si se intenta acceder a la página 404
            this.router.navigate(['home']);
            return false;  // No permite acceder a la página de error 404 directamente
        }
        return true;
    }
}