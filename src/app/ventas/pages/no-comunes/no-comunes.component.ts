import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['María', 'Juan', 'Pedro', 'Luis'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'María';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada',
  };

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      value: true,
    },
    {
      nombre: 'Batman',
      value: false,
    },
  ];

  //Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500)
  })

}
