import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Covid19Component } from './covid19/covid19.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {  MatDividerModule, MatPaginatorModule } from '@angular/material';
import { MainComponent } from './main/main.component';
import { FiltersComponent } from './filters/filters.component';
import { BrandsComponent } from './filters/brands/brands.component';
import { PriceComponent } from './filters/price/price.component';
import { YearComponent } from './filters/year/year.component';
import { MileageComponent } from './filters/mileage/mileage.component';
import { FuelTypeComponent } from './filters/fuel-type/fuel-type.component';
import { FiltersModule } from './filters/filters.module';
import { FiltersRoutingModule } from './filters/filters-routing.module';
import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { FormsModule } from '@angular/forms';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';





@NgModule({
  declarations: [
    AppComponent,
    Covid19Component,
    MainComponent,
    FiltersComponent,
    BrandsComponent,
    PriceComponent,
    YearComponent,
    MileageComponent,
    FuelTypeComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,

    FormsModule,
    // MDBBootstrapModule.forRoot(),

    // FiltersModule,
    // FiltersRoutingModule,


    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatSliderModule,
    MatRadioModule,
    MatDividerModule,


    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
