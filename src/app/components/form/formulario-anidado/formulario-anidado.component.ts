import { Component, OnInit } from '@angular/core';
//* Importamos react form para hacer un formulario anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss'],
})
export class FormularioAnidadoComponent implements OnInit {
  //? FormGroup lo utilizamos para crear la variable del formulario y el FormBuilder lo inyectamos en el constructor y iniciaremos los valores con este
  miFormularioAnidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //* Agrupacion de telefonos
    const telefonoFijo = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });
    const telefonoCelular = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });

    //*Anidacion de formularios
    //? Creamos una agrupación de formularios que contiene dos agrupaciones
    this.miFormularioAnidado = this.formBuilder.group({
      telefonoFijo: telefonoFijo,
      telefonoCelular: telefonoCelular,
    });
  }

  //
}
