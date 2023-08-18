import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temperature-input',
  templateUrl: './temperature-input.component.html',
  styleUrls: ['./temperature-input.component.css']
})
export class TemperatureInputComponent implements OnInit {
  @Output() minTemperature: number = 0;
  @Output() maxTemperature: number = 0;
  @Output() targetTemperature: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(): void {
    if (this.minTemperature > this.maxTemperature) alert("Min Temperature should be bigger than Max Temperature");
    if (this.targetTemperature > this.maxTemperature) alert("Max Temperature should be bigger than Target Temperature");
    if (this.minTemperature > this.targetTemperature) alert("Target Temperature should be bigger than Min Temperature");
  }
}
