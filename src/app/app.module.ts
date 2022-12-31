import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//? Locale para pipes
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES); //? registramos el LOCALE_ID de 'es' para poder usarlo en los PIPES

//? Import Peticion http
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/form/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/form/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/form/formulario-validado/formulario-validado.component';
// ?import Formularios reactivos
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// ? Modulos Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { EjmploPipesComponent } from './components/ejmplo-pipes/ejmplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemploAnimacionComponent } from './components/ejemplo-animacion/ejemplo-animacion.component';


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjmploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,
    EjemploAnimacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //* Importamos el client para hacer peticiones http
    HttpClientModule,
    //* importamos Formularios reactivos
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //* Registramos los locale de Es para que los PIPES salgan en español
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
