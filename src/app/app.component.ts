import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aprendiendo-angular';
  usuario = 'Anónimo';

  /**
   * Esta funcion se ejecuta cuando en el Hijo (Saludo Componet) se pulse un boton
   */
  recibirMensajePadre(evento: string) {
    alert(evento);
  }
}
