import { Component } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule],     //Para trabajar con currency en html se importa CommonModule
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
   clientes: Cliente[] | null = null; //Definimos un arreglo del tipo CLIENTE y nulo
 
  constructor(private clientesServicio: ClienteService) {} //Inyectamos el servicio de clientes del tipo CLIENTESERVICE
 
  //Cargamos el listado de componentes con ngOnInit
  ngOnInit() { 
    // Al inicializar el componente, se suscribe al servicio para obtener la lista de cliente
    this.clientesServicio.getClientes().subscribe(clientes => { 
      this.clientes = clientes; // Almacena el listado en la propiedad 'clientes' 
    }); 
  } 
} 
