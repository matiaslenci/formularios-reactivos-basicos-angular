import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],
  //? Metadatos para animación del componente
  animations: [
    trigger('animaciones', [
      state(
        'active',
        style({
          //? Traemos la animacion que queremos hacer cuando este activa
          transform: 'translate(10px, 20px)',
        })
      ),
      state(
        'inactive',
        style({
          //? Traemos la animacion que queremos hacer cuando este inactiva
          transform: 'translate(40px, 50px)',
        })
      ),
      state(
        'subir',
        style({
          transform: 'translateY(10px)',
        })
      ),
      state(
        'rotar',
        style({
          transform: 'rotate(90deg)',
        })
      ),
      //? Pasa de inactiva a activa en 1seg y visebersa
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
      //? Debemos añadir todas las combinaciones de transition para tener todos los eventos controlados
      transition('active => subir', animate('1000ms ease-in')),
      transition('active => rotar', animate('1000ms ease-in')),
      transition('inactive => subir', animate('1000ms ease-in')),
      transition('inactive => rotar', animate('1000ms ease-in')),
      transition('subir => active', animate('1000ms ease-out')),
      transition('subir => inactive', animate('1000ms ease-out')),
      transition('subir => rotar', animate('1000ms ease-in')),
      transition('rotar => active', animate('1000ms ease-out')),
      transition('rotar => inactive', animate('1000ms ease-out')),
      transition('rotar => subir', animate('1000ms ease-in')),
    ]),
  ],
})
export class EjemploAnimacionComponent implements OnInit {
  //? Inicializamos state
  state: string = 'inactive';

  constructor() {}

  ngOnInit(): void {
    //? Cuando se renderice el componente, cada segundo cuando cambiara de estado entre 'active' y 'inactive'
/*     setInterval(() => {
      if (this.state == 'active') {
        this.state = 'inactive';
      } else {
        this.state = 'active';
      }
    }, 1000); */
  }

  cambiarEstado() {
    if (this.state == 'active') {
      this.state = 'inactive';
    } else {
      this.state = 'active';
    }
  }



  subir() {
    this.state = 'subir';
  }

  rotar() {
    this.state = 'rotar';
  }
}
