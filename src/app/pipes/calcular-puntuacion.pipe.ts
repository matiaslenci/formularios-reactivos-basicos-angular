import { Pipe, PipeTransform } from '@angular/core';
import { IJugador } from '../models/jugador.interface';

@Pipe({
  name: 'calcularPuntuacion'
})
export class CalcularPuntuacionPipe implements PipeTransform {

  transform(jugador: IJugador, args?: unknown[]): string {
    let puntuacionTotal: number = 0;

    jugador.puntuacion.forEach(puntos=>{
      puntuacionTotal += puntos 
    })
    return `${jugador.nombre} realizo ${puntuacionTotal} puntos en total`;
  }

}
