import { Injectable } from '@angular/core';

//? Importamos la lista de contactos del Mock
import { CONTACTOS } from '../mocks/contacto.mock';
import { IContacto } from '../models/contacto.interface';

//? importamos observable de rxjs
import { Observable } from 'rxjs';

//? Este Injectable nos permite inyectar informacion en este caso a nivel raiz(root)
@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}

  /**
   * *Retorna la lista de contacto de manera asincrona
   * @returns Si recibimos la promesa se resuelve la lista de contactos
   */
  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  /**
   * *Retorna un contacto igual al id que pasamos
   * @param id El id del contacto que queremos buscar
   */
  obtenerContactoPorId(id: number): Observable<IContacto> | undefined {
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );

    //Observable
    let observable: Observable<IContacto> = new Observable((observer) => {
      observer.next(contacto); // Emite valores a todos los componentes subcriptos
      observer.complete(); // No emite mas valores
    });

    if (contacto) {
      return observable;
    } else {
      throw new Error('Error');
    }
  }
}
