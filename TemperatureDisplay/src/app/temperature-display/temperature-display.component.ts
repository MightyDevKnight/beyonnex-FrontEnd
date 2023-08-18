import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-display',
  templateUrl: './temperature-display.component.html',
  styleUrls: ['./temperature-display.component.css']
})
export class TemperatureDisplayComponent implements OnInit {
  @Input() minTemperature: number = 0;
  @Input() maxTemperature: number = 0;
  @Input() targetTemperature: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
