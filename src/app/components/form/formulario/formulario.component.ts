import { Component, OnInit } from '@angular/core';

//? Ejemplo básico de forms reactivos
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  //* Definimos nuestro formulario
  miFormulario: FormGroup = new FormGroup({});

  //* inyectamos la clase formBuilder para construir el FormGroup
  constructor(private fromBuilder: FormBuilder) {}
  

  ngOnInit(): void {
    //? iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario = this.fromBuilder.group({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: '',
    });

    //? Nos subscribimos a los cambios que ocurran en el formulario y los pasamos por consola
    this.miFormulario.valueChanges.subscribe(console.log);
  }
}
