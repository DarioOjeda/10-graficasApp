import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DiscoComponent } from './pages/disco/disco.component';
import { DiscoHttpComponent } from './pages/disco-http/disco-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
       {path: 'barras', component: BarrasComponent},
       {path: 'barras-dobles', component: BarrasDobleComponent},
       {path: 'disco', component: DiscoComponent},
       {path: 'disco-http', component: DiscoHttpComponent},
       {path: '**', redirectTo: 'barras'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
