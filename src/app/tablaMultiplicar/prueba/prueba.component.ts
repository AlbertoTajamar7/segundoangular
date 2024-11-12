import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  public numero:number;
  public numeros = new Array<number>;
  constructor(){
    this.numeros = new Array<number>();
    this.numero = 0;
  }
  generarTabla(){
    console.log("en la funcion "+ this.numero)
    let aux = new Array<number>()
    for (let i = 1; i <=10; i++) {
      let resultado = this.numero*i
      aux.push(resultado)
    }
    this.numeros = aux
  }

}
