import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';


@Component({
  selector: 'app-disco-http',
  templateUrl: './disco-http.component.html',
  styles: [
  ]
})
export class DiscoHttpComponent implements OnInit{
  

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 150],
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
  ];
  constructor( private graficasService: GraficasService ) {}
  ngOnInit(): void {
    // this.graficasService.getUsuariosRedes()
    //       .subscribe( data => {
    //         console.log(data);
    //         const labels = Object.keys( data );
    //         const values = Object.values( data );

    //         this.doughnutChartLabels = labels;
    //         this.doughnutChartData.push( values );

    //       });    
    this.graficasService.getUsuariosRedesSocialesDonaData()
            .subscribe( ({labels, values}) => {
                  this.doughnutChartLabels = labels;
                  this.doughnutChartData = values;
                });
  }



}
