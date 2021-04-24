import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-fuel-type',
  templateUrl: './fuel-type.component.html',
  styleUrls: ['./fuel-type.component.css']
})
export class FuelTypeComponent implements OnInit {

  constructor() { }
  @Input() cars


  @Output() newItemEvent= new EventEmitter<any>();

  addNewItem(x: string) {
    this.newItemEvent.emit(x);
    console.log( this.newItemEvent.emit(x));
    
  }

  ngOnInit() {
  }

}
