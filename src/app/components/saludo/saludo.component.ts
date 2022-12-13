import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-saludo', // El selector es el que utilizaremos para declarar este componente para poder anidarlo
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() nombre: string = 'Usuario';
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>(); //Inicializamos la variable mensajeEmitter y la declaramos como string

  /**
   * Variable de estilos
   */
  misEstilos: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  constructor() {}

  ngOnInit(): void {
    // instruccion previas a la renderización del componente
    console.log('ngOnInit del componente Saludo');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // instrucciones si el componente cambia
    console.log('Anterior valor : ', changes['nombre'].previousValue);
    console.log('Nuevo valor: ', changes['nombre'].currentValue);
  }
  ngOnDestroy(): void {
    // instrucciones posteriores a la renderización del componente
    console.log('ngOnDestroy el componente va a desaparecer');
  }

  /**
   * Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
   */
  enviarMensajePadre(): void {
    //alert(`Hola,${this.nombre}. Alerta desde un click de boton`);
    this.mensajeEmitter.emit(`Hola,${this.nombre}. Alerta desde un componente`);
  }
}

/**
 * Orden del ciclo de vida de los componentes y los mas importantes📌
 *  1. ngOnChanges 📌
 *  2. ngOnInit 📌
 *  3. ngAfterContentInit
 *  4. ngAfterContentChecked
 *  5. ngAfterViewInit
 *  6. ngAfterViewChecked
 *  7. ngAfterContentChecked
 *  8. ngAfterViewChecked
 *  9. ngOnDestroy 📌
 */
