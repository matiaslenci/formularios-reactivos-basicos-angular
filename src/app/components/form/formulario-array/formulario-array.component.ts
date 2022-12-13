import { Component, OnInit } from '@angular/core';
//* importamos para formulario array
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss'],
})
export class FormularioArrayComponent implements OnInit {
  //? Inicializamos el formulario
  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormularioArray = this.formBuilder.group({
      nombre: '',
      apellido: '',
      telefonos: this.formBuilder.array([]), // ?Inicializamos la lista de telefonos vacia
    });
  }

  /**
   * @return Metodo Getter para obtener el FormArray de la lista de telefonos
   */
  get telefonosFormulario(): FormArray {
    return this.miFormularioArray.get('telefonos') as FormArray;
  }

  /**
   *? Añade telefonos a la lista
   */
  anadirTelefono() {
    // Creamos un grupo telefonos
    const telefonoNuevo = this.formBuilder.group({
      numero: '',
      prefijo: '',
    });

    //Añadimos el grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);
  }

  /**
   * ? Elimina telefonos de la lista
   */
  eleminarTelefono(index: number) {
    this.telefonosFormulario.removeAt(index);
  }
}
