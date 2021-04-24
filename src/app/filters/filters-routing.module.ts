import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { FiltersComponent } from './filters.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { MileageComponent } from './mileage/mileage.component';
import { PriceComponent } from './price/price.component';
import { YearComponent } from './year/year.component';

const routes: Routes = [
  {path:'', component:FiltersComponent, children:[
    {path:'brands', component:BrandsComponent},
    {path:'fuel', component:FuelTypeComponent},
    {path:'mileage', component:MileageComponent},
    {path:'price', component:PriceComponent},
    {path:'year', component:YearComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltersRoutingModule { }
