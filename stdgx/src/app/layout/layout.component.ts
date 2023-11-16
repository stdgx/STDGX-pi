import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/services/alerts.service';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertsService,
    private storage: StorageService) { }


  ngOnInit(): void {
    this.sidebar();
  }

  sidebar() {
    let sidebar = document.querySelector('.sidebar') as HTMLDivElement;
    let sidebarBtn = document.querySelector('.bi-list-task') as HTMLElement;

    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });
  }

  logout() {
    this.alert.swalQuestion('Deseja realmente sair?', 'Sua conta será desconectada...', 'question', 'Sim!', 'Não').then((result) => {
      if (result.isConfirmed) {
        this.auth.setUsuarioAutenticado(false);
        this.storage.setLocalStorage(null)
        this.router.navigate(['/']);
      }
    })
  }
}
