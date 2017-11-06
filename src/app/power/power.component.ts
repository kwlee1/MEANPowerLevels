import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class PowerComponent implements OnInit {
  power: number;

  constructor() { }

  ngOnInit() {
    this.power = 1; 
  }

}
