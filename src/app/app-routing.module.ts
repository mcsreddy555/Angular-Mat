import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import {FiltersComponent } from './filters/filters.component';
import {FiltersRoutingModule } from './filters/filters-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { Covid19Component } from './covid19/covid19.component';


const routes: Routes = [
    // {path:'', redirectTo:'/main', pathMatch:'full'},
    {path:'main', component:MainComponent},
    {path:'charts', component:ChartsComponent},
    {path:'covid-result', component:Covid19Component},
    // {path:'filters', loadChildren:()=>import('./filters/filters-routing.module').then(m=>m.FiltersRoutingModule)}
    {path:'filters', loadChildren:()=>import('./filters/filters-routing.module').then(m=>m.FiltersRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
