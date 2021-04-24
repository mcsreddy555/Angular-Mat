import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor() { }
  @Input() cars;
  searchText:string

  @Output() newItemEvent= new EventEmitter<any>()


  selectBrand(x){
    this.newItemEvent.emit()
    console.log(this.newItemEvent.emit(x.value) )
  }
    
  
  ngOnInit() {
    // this.selectBrand()
    // console.log(this.selectBrand(this.cars.value));
    
  }

}
