import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplica', //? Nombre del pipe
})
export class MultiplicaPipe implements PipeTransform {
  /**
   * ? Recibe un numero y lo multiplica
   * @param value Es el valor que recibe y el cual transformaremos.
   * @param args El el parametro por el que multiplicaremos el valor/ Puede exisistir como no.
   * @returns El resultado de la multiplicación del valor por el argumento.
   */
  transform(value: number, args?: any): number {
    //? Parcea el valor a un numero
    let argsParseado: number = parseFloat(args);

    if (args == undefined) {
      return value;
    } else {
      return value * argsParseado;
    }
  }
}
