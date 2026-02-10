import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService implements CanActivate{

  constructor(
    private authService: Auth,  //Necesitamos estos onjetos para verificar autentificacion y para direccionar
    private router: Router
  ) { }

  //Ya podemos trabajar con este metodo
  canActivate(): Observable<boolean> { //Entonces canActivate retorna un obervable  tipo booleano, verdarero y falso. Para ello este metodo procesa el auth.
return authState(this.authService).pipe( //Llama al authState y queda a la escucha si llega algo en authService, con pipe le damos las herramientas necesarias para procesar el objeto que llega en auth.
map(auth => !!auth || (this.router.navigate(['/login']), false)) //Le aplicamos map para covertir a un verdarero o falso. Si auth esta autentificado entonces es verdareo y pasa al link si no lo redirijo alogin y le digo quees falso 
);
  
}

}
