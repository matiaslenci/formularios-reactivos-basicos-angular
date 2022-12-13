import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import Peticion http
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/form/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/form/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/form/formulario-validado/formulario-validado.component';
// *import Formularios reactivos
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// * Modulos Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //* Importamos el client para hacer peticiones http
    HttpClientModule,
    //* importamos Formularios reactivos
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
