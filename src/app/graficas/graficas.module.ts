import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DiscoComponent } from './pages/disco/disco.component';
import { DiscoHttpComponent } from './pages/disco-http/disco-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DiscoComponent,
    DiscoHttpComponent,
    GraficaBarraComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }
