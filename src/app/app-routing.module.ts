import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Grafica1Component } from './components/grafica1/grafica1.component';

const routes: Routes = [{
  path: '',
  component: Grafica1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
