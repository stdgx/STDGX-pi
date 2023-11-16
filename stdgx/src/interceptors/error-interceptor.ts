import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AlertsService } from 'src/services/alerts.service';
import { StorageService } from 'src/services/storage.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private alert: AlertsService, private storage: StorageService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        let errorObj = error;
        if (errorObj.error) {
          errorObj = errorObj.error;
        }

        switch (error.status) {
          case 401:
            this.handle401();
            break;
          case 403:
            this.handle403();
            break;
          case 422:
            this.handle422();
            break;
          default:
            this.defaultError();
            break;
        }

        return throwError(() => error);
      })
    ) as any;
  }

  handle401() {
    this.alert.swalAlert('warning', 'Credenciais Inválidas', false, 5000);
  }
  handle403() {
    this.alert.swalAlert('error', 'Acesso Negado!', false, 5000);
  }
  handle422() {
    this.alert.swalAlert('info', 'Sua conexão expirou...', false, 5000);
  }
  defaultError() {
    this.alert.swalAlert('warning', 'Falha na comunicação com o servidor', false, 5000);
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
