import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mileage',
  templateUrl: './mileage.component.html',
  styleUrls: ['./mileage.component.css']
})
export class MileageComponent implements OnInit {

  constructor() { }
  @Input() cars
  ngOnInit() {
  }

}
