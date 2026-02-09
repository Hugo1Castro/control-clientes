import { Component } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../servicios/cliente.service';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, RouterModule, FormsModule],     //Para trabajar con currency en html se importa CommonModule y ROUTERMODULE para router linl del html 
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {


  clientes: Cliente[] | null = null; //Definimos un arreglo del tipo CLIENTE y nulo
  //Definimos el objeto de cliente de [(ngModel)], en la variable cliente 
  cliente: Cliente = {
    nombre:'',
    apellido:'',
    email:'',
    saldo: undefined
  };


  constructor(private clientesServicio: ClienteService) { } //Inyectamos el servicio de clientes del tipo CLIENTESERVICE

  //Cargamos el listado de componentes con ngOnInit
  ngOnInit() {
    // Al inicializar el componente, se suscribe al servicio para obtener la lista de cliente
    this.clientesServicio.getClientes().subscribe(clientes => {
      this.clientes = clientes; // Almacena el listado en la propiedad 'clientes' 
    });
  }

  getSaldoTotal(): number {
  return this.clientes?.reduce((total, cliente) => total + (cliente.saldo ?? 0), 0) ?? 0;
  }
  //Retornamos del arreglo de clientes si no es nulo ni indefinido entonces mandamos a llamar el metodo REDUCE
  //Este metodo REDUCE lo vamos a utilizar para reducir la informacion que vamos a proporcionar a un solo valor
  //en este caso queremos obtener un saldo total a partir de todas las sumas de todos los saldos de todos los clientes
  //Le pasamos 2 parametros:
  //1. total, que es la variable que acumula el resultado, usa el lambda para sumar el total que inicia en 0 + saldo del cliente si el saldo de cliente es nulo o indefinido su valor por defecto sera cero
  //2. 0, valor iicial de total  reduce((total, cliente).....,0)
  //Si this.clientes es cero o indefinido retornamos 0,  this.clientes?reduce() ?? 0;

  agregar(clienteForm: NgForm) {
    const {value, valid} = clienteForm; //definimos una constante en la cual recibimos el valor de nuestrom formulario y si es valido
    if (valid){
      //Agregamos la logoica para agregar un cliente

      //limpiamos el formulario
      clienteForm.resetForm();
    }
    }
} 

