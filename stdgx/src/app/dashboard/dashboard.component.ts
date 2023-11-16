import { Component, OnInit } from "@angular/core";

import { Chart } from 'chart.js/auto';
import { UserDTO } from "src/models/user.dto";
import { StorageService } from "src/services/storage.service";
import { UserService } from "src/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public chart1: any;
  public chart2: any;
  public chart3: any;
  public chart4: any;

  userData!: UserDTO;

  constructor(private user: UserService, private storage: StorageService) {

  }

  ngOnInit(): void {
    this.user.findUsuarioByEmail(this.storage.getLocalStorage()?.login!).subscribe((response) => {
      this.userData = response;
      this.createChart();
    })
  }

  createChart() {
    this.chart1 = new Chart('MyChart1', {
      type: 'bar',
      data: {
        labels: Object.keys(JSON.parse(this.userData.customerAttributeJSON)),
        datasets: [
          {
            label: 'Padaria',
            data: Object.values(JSON.parse(this.userData.customerAttributeJSON)),
            backgroundColor: [
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
            ],
            borderColor: [
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
            ],
            borderWidth: 3,
            borderRadius: 3
          },
        ],
      },
      options: {
        responsive: false,
      },
    });
    this.chart1.update();
    this.chart2 = new Chart('MyChart2', {
      type: 'bar',
      data: {
        labels: [
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
        ],
        datasets: [
          {
            label: 'Title',
            data: ['2', '7', '15', '4', '19', '38', '25', '12', '47', '65'],
            backgroundColor: [
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
            ],
            borderColor: [
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
            ],
            borderWidth: 3,
            borderRadius: 3
          },
        ],
      },
      options: {
        responsive: false
      },
    });
    this.chart3 = new Chart('MyChart3', {
      type: 'bar',
      data: {
        labels: Object.keys(JSON.parse(this.userData.customerAttributeJSON)),
        datasets: [
          {
            indexAxis: 'y',
            label: 'Title',
            data: Object.values(JSON.parse(this.userData.customerAttributeJSON)),
            backgroundColor: [
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
            ],
            borderColor: [
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
            ],
            borderWidth: 3,
            borderRadius: 3
          },
        ],
      },
      options: {
        responsive: false
      },
    });
    this.chart4 = new Chart('MyChart4', {
      type: 'line',
      data: {
        labels: [
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
        ],
        datasets: [
          {
            label: 'Title',
            data: ['5', '8', '9', '2', '7', '20', '27', '19', '18', '4'],
            backgroundColor: [
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(75,0,130,0.7)',
            ],
            borderColor: [
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
              'rgba(75,0,130)',
            ],
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: false
      },
    });
  }
}

