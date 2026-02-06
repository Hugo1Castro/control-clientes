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
// Realiza la consulta directamente usando la API modular 
const clientesRef = collection(this.firestore, 'clientes'); 
const consulta = query(clientesRef, orderBy('nombre', 'asc')); 
this.clientes = collectionData(consulta, { idField: 'id' }) as Observable<Cliente[]>; 
} 
                                                 
getClientes(): Observable<Cliente[]> { 
 
return this.clientes; 
} 
} 

