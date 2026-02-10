import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 // Inyectamos el servicio de autentificacion con Auth en el constructor 
  constructor(private authService: Auth) {}  

 
//Metodo para poder Iniciar session  
  login(email: string, password: string) { 
    return new Promise((resolve, reject) => { //Aquí creamos una Promesa. Una promesa es como un 'vale' por un resultado futuro. Como ir a internet tarda tiempo, yo te prometo que te daré una respuesta. Sicontraseña es correcta resolve y si falla reject
      signInWithEmailAndPassword(this.authService, email, password) //Llamamos al método oficial de Firebase. Le pasamos nuestra conexión (authService) junto con las credenciales que el usuario escribió. Es el momento en que enviamos la información a los servidores de Google para que la verifiquen".                                                                  
        .then(datos => resolve(datos)) //'Y entonces...'. Si Firebase nos contesta que todo está bien, recibimos los datos del usuario y activamos el resolve. Esto le avisa al resto de la aplicación: '¡Éxito, el usuario puede pasar!'
        .catch(error => reject(error)); //Si algo sale mal (ej: contraseña incorrecta), atrapamos ese error y activamos el reject. Esto le avisa a la aplicación: 'Algo falló, muestra un mensaje de error'
    }); 
  }

  // Para saber el estado de autentificacion del usuario. Obtenemos el usuario logueado 
  getAuthState(): Observable<any> { // Este metodo regresa un obserbable
    return authState(this.authService); 
  } 
 
  logout() { 
    this.authService.signOut(); 
  } 
}
