import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/services/storage.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storage: StorageService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let localStorage = this.storage.getLocalStorage();
    let url = 'http://localhost:8080/'
    let N = url.length;
    let requestToAPI = req.url.substring(0, N) == url;

    if (localStorage && requestToAPI) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + localStorage.token),
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};