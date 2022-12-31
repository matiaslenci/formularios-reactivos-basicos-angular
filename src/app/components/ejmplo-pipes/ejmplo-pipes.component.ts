import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { IJugador } from 'src/app/models/jugador.interface';

@Component({
  selector: 'app-ejmplo-pipes',
  templateUrl: './ejmplo-pipes.component.html',
  styleUrls: ['./ejmplo-pipes.component.scss'],
})
export class EjmploPipesComponent implements OnInit {
  // day of birthday (fecha de cumpleaños)
  dob: Date = new Date(2001, 10, 12);
  cambio: boolean = true;
  nombre: string = 'Matias';
  numero: number = 5;
  //* Ejemplo pipe calcular resultado
  jugador1: IJugador = {
    nombre: 'Matias',
    puntuacion: [10, 30, 40, 0],
  };
  jugador2: IJugador = {
    nombre: 'Emiliano',
    puntuacion: [0, 80, 10, 5],
  };
  //* Ejemplo decimales
  NUMERO_PI: number = 3.14159265359;
  //*Ejemplo moneda
  precioCarrito: number = 100;
  //* Ejemplo json
  persona: IContacto = {
    id: 0,
    nombre: 'Matias',
    apellido: 'Lenci',
    email: 'matias@gmail.com',
    edad: 21,
  };
  //* Ejemplo porcentaje
  cantidad: number = 0.35;
  //* Ejemplo texto largo
  textoLargo: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus provident sint in eius repellat.'

  constructor() {}

  ngOnInit(): void {}

  //? Hacemos un get para saber con que formato queremos renderizar la fecha si de forma corta o completa.
  get dateFormat() {
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  //? Cambia el valor booleano para activar el cambio
  cambiarFormato() {
    this.cambio = !this.cambio;
  }
}
