import { Component, OnInit, OnDestroy } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  // *Inyectamos en el constructor el servicio de Contactos
  constructor(private contactoService: ContactoService) {}

  // *Creamos una lista de contactos
  listaContactos: IContacto[] = [];

  contactoSeleccionado: IContacto | undefined;

  // * Subscripcion
  subscription: Subscription | undefined;

  ngOnInit(): void {
    // *Obtener la lsita de contactos que nos brinda el servicio
    this.contactoService
      .obtenerContactos()
      .then((lista: IContacto[]) => (this.listaContactos = lista)) // * Cuando obtiene la respuesta http convierte lista a listaContactos
      .catch((error) => alert(`Ocurrio un error😥 ${error} `)) //* Si hay un error devuelve una alerta
      .finally(() => console.log('Termino de cargar la lista de contactos')); // * Avisa cuando se termino de cargar la lista
  }

  /**
   * * Convierte al contacto que seleccionemos en un contacto de la lista de contactos
   * @param id Hace la busqueda por el id del contacto
   */
  obtenerContacto(id: number) {
    this.subscription = this.contactoService
      .obtenerContactoPorId(id)
      ?.subscribe((contacto: IContacto) => this.contactoSeleccionado);
  }

  //!Destruye el componente cuando deja de recibir peticiones
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

/* ?.then((contacto: IContacto) => (this.contactoSeleccionado = contacto))
.catch((error) =>
  alert(`Ocurrio un error al recuperar el contacto😥 ${error} `)
)
.finally(() => console.log('peticion por id terminada')); */
