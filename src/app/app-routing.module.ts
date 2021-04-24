import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

import { ChartsComponent } from './charts/charts.component';
import { Covid19Component } from './covid19/covid19.component';


const routes: Routes = [
    // {path:'', redirectTo:'/main', pathMatch:'full'},
    {path:'main', component:MainComponent},
    {path:'charts', component:ChartsComponent},
    {path:'covid-result', component:Covid19Component},
    
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
