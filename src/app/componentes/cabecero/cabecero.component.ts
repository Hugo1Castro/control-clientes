import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-cabecero',
  imports: [RouterModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {
   isLoggedIn: boolean = false; 
  loggedInUser: string | null = null; 
 
  constructor( 
    private loginService: LoginService, 
    private router: Router 
  ) { } 
 
  ngOnInit() { 
    //Llamamos al servicio y le decimos: 'Abre el canal de noticias sobre la autenticación (getAuthState) y suscríbete (subscribe) 
    //A partir de ahora, cada vez que algo cambie (alguien inicie sesión o la cierre), Firebase nos enviará un paquete de información que llamaremos usuario
    this.loginService.getAuthState().subscribe( usuario => {
      if(usuario){//Si usuario tiene data es decir esta logeado 
        this.isLoggedIn = true; //Esta logeado
        this.loggedInUser = usuario.email; //Y guardamos su correo electrónico para poder mostrarlo en la barra de arriba (ej: 'Hola, juan@mail.com')".
      } 
      else{ 
        this.isLoggedIn = false; 
      } 
    }); 
  } 
 
  logout(){ 
    this.loginService.logout(); 
    this.isLoggedIn = false; 
    this.router.navigate(['/login']); 
  } 
}
