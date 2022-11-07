import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurement-input',
  templateUrl: './measurement-input.component.html',
  styleUrls: ['./measurement-input.component.css'],
})
export class MeasurementInputComponent implements OnInit {
  value = 17.3;
  sensor = 'Temperatur Wohnzimmer';
  units = ['°C', 'Watt', 'ppm'];
  unit = '°C';
  constructor() {}

  ngOnInit() {}
}
