import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from 'src/models/user.dto';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  findUsuarioByEmail(email: string): Observable<UserDTO> {
    return this.http.get<UserDTO>(
      `http://localhost:8080/object/data/${email}`
    );
  }
}