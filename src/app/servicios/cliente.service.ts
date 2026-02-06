import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/cliente.modelo';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
clientes: Observable<Cliente[]>; 


constructor(private firestore: Firestore) { 
// Realizamos una consulta para obtener el listado de clientes 
const clientesRef = collection(this.firestore, 'clientes'); //Pasamos el nombre de la collecion a clientes de firestorage a clientesRef
const consulta = query(clientesRef, orderBy('nombre', 'asc'));//Definimos una consulta en la variable consulta
this.clientes = collectionData(consulta, { idField: 'id' }) as Observable<Cliente[]>;//Obtenemos el listado de clientes en clientes con el metodos collectiondata, pasamos la variable de consulta y le indicamos que se agregue el campo id que se va incluir con el nombre 'id' y va retornar COMO un objeto de tipo observable que va a ser un ARREGLO de tipo cliente
} 
                                                 
getClientes(): Observable<Cliente[]> { 
return this.clientes; 
} 
} 

