import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltersRoutingModule } from './filters-routing.module';
import { BrandsComponent } from './brands/brands.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { MileageComponent } from './mileage/mileage.component';
import { PriceComponent } from './price/price.component';
import { YearComponent } from './year/year.component';
import { FiltersComponent } from './filters.component';

@NgModule({
  declarations: [
    // FiltersComponent,
    BrandsComponent,
    FuelTypeComponent,
    MileageComponent,
    PriceComponent,
    YearComponent,
  ],
  imports: [
    CommonModule,
    FiltersRoutingModule
  ]
})
export class FiltersModule { }
