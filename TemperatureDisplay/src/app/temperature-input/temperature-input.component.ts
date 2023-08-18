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

}
