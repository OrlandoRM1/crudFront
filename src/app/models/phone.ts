import { empty } from "rxjs";

export class Phone {
  id?: number;
  nombre: string;
  numero: number;

  constructor(nombre: string, numero: number){
    this.nombre = nombre;
    this.numero = numero;
    //this.id = id;
  }

}
