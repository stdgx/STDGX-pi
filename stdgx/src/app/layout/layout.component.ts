import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
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
}
