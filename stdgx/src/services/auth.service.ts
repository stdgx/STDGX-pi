import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { StorageService } from "./storage.service";
import { LocalStorage } from "src/models/local.storage";
import { CredentialsDTO } from "src/models/credentials.dto";
import { Observable } from "rxjs";
import { JWT_DTO } from "src/models/jwt.dto";

@Injectable()
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  private usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient, private storage: StorageService) { }

  authenticate(creds: CredentialsDTO): Observable<HttpResponse<JWT_DTO>> {
    return this.http.post<JWT_DTO>(`http://localhost:8080/auth/login`, creds, {
      observe: 'response',
      responseType: 'json',
    });
  }

  successfulLogin(authorizationValue: JWT_DTO): LocalStorage {
    let tok = authorizationValue.token;
    let user: LocalStorage = {
      token: tok,
      login: `${this.jwtHelper.decodeToken(tok).sub}`,
    };
    this.storage.setLocalStorage(user);
    return user;
  }

  getUsuarioAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  setUsuarioAutenticado(auth: boolean) {
    this.usuarioAutenticado = auth;
  }

  register() {
    return this.http.post(`http://localhost:8080/register`, {
      observe: 'response',
      responseType: 'json',
    });
  }
}