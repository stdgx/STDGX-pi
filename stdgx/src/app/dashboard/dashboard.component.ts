import { Component, OnInit } from "@angular/core";

import { Chart } from 'chart.js/auto';

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

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart1 = new Chart('MyChart1', {
      type: 'bar',
      data: {
        labels: [
          'Pão',
          'Café',
          'Cappuccino',
        ],
        datasets: [
          {
            label: 'Padaria',
            data: ['4', '1', '1'],
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
            indexAxis: 'y',
            label: 'Title',
            data: ['27', '30', '1', '12', '7', '3', '24', '19', '4', '18'],
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

