import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  // Le inyectamos el servicio de login al componente
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (responde) => {
        console.log('Respuesta: ' + responde);
      },
      (error) => console.error('Ocurrio un error', error),
      () => console.log('Se completo la llamdada de login')
    );
  }
}
