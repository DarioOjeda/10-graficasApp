import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styles: [
  ]
})
export class DiscoComponent{
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  
  public colors: Color[] = [
    {
      backgroundColor: [
        '#0857FE',
        '#078AE6',
        '#05D6FC',
        '#07E6CA',
        '#08FE9A',
      ]
    }
  ]

}
