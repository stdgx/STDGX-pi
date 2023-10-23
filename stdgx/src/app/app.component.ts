import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stdgx';

  ngOnInit(): void {
    this.sidebar();
  }

  sidebar() {
    let sidebar = document.querySelector('.sidebar') as HTMLDivElement;
    let sidebarBtn = document.querySelector('.bi-list-nested') as HTMLElement;

    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });
  }
}
