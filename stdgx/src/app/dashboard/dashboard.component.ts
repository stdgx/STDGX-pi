import { Component, OnInit } from "@angular/core";

import { Chart } from 'chart.js/auto';
import { interval } from "rxjs";
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
  labelBaby!: any[];
  dataBaby!: any[];

  constructor(private user: UserService, private storage: StorageService) {

  }

  ngOnInit(): void {
    this.labelBaby = ['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7'];
    this.dataBaby = [1, 10, 5, 2, 20, 30, 45];
    this.graphicRandom(3000);
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
              'rgba(80,0,0,0.5)',
              'rgba(96,0,0,0.5)',
              'rgba(112,0,0,0.5)',
              'rgba(128,0,0,0.5)',
            ],
            borderColor: [
              'rgb(80,0,0)',
              'rgb(96,0,0)',
              'rgb(112,0,0)',
              'rgb(128,0,0)',
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
        labels: this.labelBaby,
        datasets: [
          {
            indexAxis: 'y',
            label: 'Chart',
            data: this.dataBaby,
            backgroundColor: [
              'rgba(71,137,75,0.5)',
              'rgba(94,167,88,0.5)',
              'rgba(139,220,120,0.5)',
              'rgba(152,210,119,0.5)',
            ],
            borderColor: [
              'rgb(71,137,75)',
              'rgb(94,167,88)',
              'rgb(139,220,120)',
              'rgb(152,210,119)',
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
        labels: this.labelBaby,
        datasets: [
          {
            indexAxis: 'y',
            label: 'Chart',
            data: this.dataBaby,
            backgroundColor: [
              'rgba(27,45,72,0.5)',
              'rgba(44,69,107,0.5)',
              'rgba(60,100,159,0.5)',
              'rgba(71,121,196,0.5)',
            ],
            borderColor: [
              'rgb(27,45,72)',
              'rgb(44,69,107)',
              'rgb(60,100,159)',
              'rgb(71,121,196)',
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
      type: 'bar',
      data: {
        labels: this.labelBaby,
        datasets: [
          {
            label: 'Chart',
            data: this.dataBaby,
            backgroundColor: [
              'rgba(249,214,14,0.5)',
              'rgba(250,222,62,0.5)',
              'rgba(251,230,110,0.5)',
              'rgba(253,239,159,0.5)',
            ],
            borderColor: [
              'rgb(249,214,14)',
              'rgb(250,222,62)',
              'rgb(255,230,96)',
              'rgb(253,239,159)',
            ],
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: false,
      },
    });
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  async graphicRandom(intervalMilisecond: number): Promise<void> {
    interval(intervalMilisecond).subscribe(() => {
      this.randomizeData(this.chart2)
      this.randomizeData(this.chart3)
      this.randomizeData(this.chart4)
    });
  }

  randomizeData(chart: any) {
    let newDataBaby = this.dataBaby.map(x => Math.floor(Math.random() * 10) + 1);
    chart.data.datasets[0].data = newDataBaby;
    chart.update();
  };
}
