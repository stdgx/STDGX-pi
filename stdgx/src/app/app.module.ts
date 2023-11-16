import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { InterfaceComponent } from './interface/interface.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { StorageService } from 'src/services/storage.service';
import { AlertsService } from 'src/services/alerts.service';
import { AuthInterceptorProvider } from 'src/interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from 'src/interceptors/error-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UploadComponent,
    InterfaceComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    UserService,
    StorageService,
    AlertsService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
