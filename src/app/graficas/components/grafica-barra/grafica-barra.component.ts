import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  
  @Input() horizontal: boolean = false;
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };


  @Input() barChartLabels: Label[] = [
    //'2015', '2016', '2017', '2018', '2019', '2020', '2021'
  ];

  public barChartType: ChartType = 'bar'; 
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#DBBC81', hoverBackgroundColor: 'red'},
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#FA725A', hoverBackgroundColor: 'red'},
    // { data: [18, 38, 100, 0, 80, 45, 23], label: 'Series C', backgroundColor: '#38D961', hoverBackgroundColor: 'red'}
  ];

  constructor() { }

  ngOnInit(): void {
    if( this.horizontal ) {
      this.barChartType = "horizontalBar";
    }
  }



}
