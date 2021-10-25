import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfarces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayuscula: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Daredevil', vuela: false, color: Color.rojo },
    { nombre: 'Linterna Verde', vuela: true, color: Color.verde },
  ];

  cambiar() {
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
}
