import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Mat';
  brands=['toyata','tata','mahindra','nissan','ford','audi','safari','benz']
  mileage=[10000, 20000, 30000, 40000, 50000, 70000, 100000]
  fuelType=['petrol', 'diesel']
  cars=[
    {brand:'toyata', price:'403000', fuelType:'deisel', kms:'7500',type:'manual', img:'./assets/images/img1.png'},
    {brand:'tata', price:'250000', fuelType:'deisel', kms:'9500',type:'manual', img:'./assets/images/img2.png'},
    {brand:'mahindra', price:'270000', fuelType:'deisel', kms:'21500',type:'manual', img:'./assets/images/img3.png'},
    {brand:'nissan', price:'180000', fuelType:'deisel', kms:'20000',type:'manual', img:'./assets/images/img4.png'},
    {brand:'ford', price:'400000', fuelType:'deisel', kms:'17500',type:'manual', img:'./assets/images/img5.png'},
    {brand:'audi', price:'1200000', fuelType:'deisel', kms:'35000',type:'manual', img:'./assets/images/img6.png'},
    {brand:'safari', price:'220000', fuelType:'deisel', kms:'32500',type:'manual', img:'./assets/images/img2.png'},
    {brand:'benz', price:'900000', fuelType:'deisel', kms:'48000',type:'manual', img:'./assets/images/img5.png'},
    {brand:'ford', price:'400000', fuelType:'deisel', kms:'17500',type:'manual', img:'./assets/images/img5.png'},
    {brand:'audi', price:'1200000', fuelType:'deisel', kms:'35000',type:'manual', img:'./assets/images/img6.png'},
  ]

  filterBrand(car){
    this.brands=this.brands.filter((i)=>i=car);
  }

  filterFuel(newItem:any) {
    this.fuelType.values();
  }

}
