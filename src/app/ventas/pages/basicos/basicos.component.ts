import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'fernando'
  nombreUpper: string = 'fernando'
  nombreCompleto: string = 'fernando'

  fecha: Date = new Date();

}
