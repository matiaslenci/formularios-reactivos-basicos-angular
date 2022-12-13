import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss'],
})
export class FormularioValidadoComponent implements OnInit {
  miFormularioValidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormularioValidado = this.formBuilder.group({
      //? primero pasamos el valor por defecto y despues el campo de validación.
      nombre: ['', Validators.required], //* Campo obligatorio
      apellido: '', // * campo no obligatorio
      edad: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(99),
        ]),
      ], //* Es obligatorio , minimo debe tener 18 años y maximo 99.
      email: ['', Validators.compose([Validators.required, Validators.email])], //* Es obligatorio y de tipo email
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
        ]),
      ], //* Es obligatorio y con expresión regular (Tiene que tener may y min)
      acepta: [false, Validators.requiredTrue], //* Campos bolleano que es obligatorio que este en true
    });
  }

  //? Getters
  get nombre() {
    return this.miFormularioValidado.get('nombre');
  }

  get apellido() {
    return this.miFormularioValidado.get('apellido');
  }
  get edad() {
    return this.miFormularioValidado.get('edad');
  }

  get email() {
    return this.miFormularioValidado.get('email');
  }
  get password() {
    return this.miFormularioValidado.get('password');
  }

  get acepta() {
    return this.miFormularioValidado.get('acepta');
  }

  //? Metodo submit del formulario
  enviarFormulario(){
    // Controlamos que el formulario sea valido
    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value)
      // Reseteamos los campos del formulario
      this.miFormularioValidado.reset();
    }
  }
}
