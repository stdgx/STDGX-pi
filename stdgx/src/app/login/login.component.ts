import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsDTO } from 'src/models/credentials.dto';
import { JWT_DTO } from 'src/models/jwt.dto';
import { UserDTO } from 'src/models/user.dto';
import { AlertsService } from 'src/services/alerts.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  lForm!: FormGroup;
  usuario!: UserDTO;
  creds!: CredentialsDTO;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private alert: AlertsService,
    private router: Router) {
    this.lForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  login() {
    this.creds = this.lForm.value;
    this.auth.authenticate(this.creds).subscribe({
      next: (response) => {
        this.auth.successfulLogin(response.body as JWT_DTO).login
        this.auth.setUsuarioAutenticado(true);
        this.router.navigate(["/layout/dash"]);
        this.alert.swalAlert('success', 'Logado com sucesso!', false, 5000);
      }
    })
  }

  register() {
    this.router.navigate(["/register"]);
  }
}
