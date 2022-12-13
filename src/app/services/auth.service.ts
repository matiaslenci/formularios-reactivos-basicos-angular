import { Injectable } from '@angular/core';
// Observable
import { Observable } from 'rxjs';
// Peticion http que vamos a inyectar
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

    //Hacemos un metodo que devuelve un observable
    login(email:String,password:String): Observable<any> {
      let body = {
        email: email,
        password: password
      }
      // Hacemos un this.http y apartir de ahi indicamos que queresmos hacer (post, get, etc.)
      //Devolvemos la respuesta cuando la peticion http se haya completado
      //el componente suscripto accedera al componente del login
      return this.http.post("http://reqres.in.api/login",body)

  }
}
