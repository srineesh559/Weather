import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherObject } from 'src/app/core/model/weather';

@Component({
  selector: 'app-weather-list-page',
  templateUrl: './weather-list-page.component.html',
  styleUrls: ['./weather-list-page.component.scss'],
})
export class WeatherListPageComponent implements OnInit {
  @Input() errorMessage: string = '';
  @Input() cityclimate: WeatherObject[] = [];
  @Input() status: string = '';
  @Input() buttonName: String = '';
  @Output() favouritebtnClick = new EventEmitter<WeatherObject>();
  @Output() removebtnClick = new EventEmitter();
  @Output() onClick = new EventEmitter<WeatherObject>();

  constructor() {}

  ngOnInit(): void {}

  public changeFavourite(weather: WeatherObject) {
    this.favouritebtnClick.emit(weather);
  }

  public removall() {
    this.removebtnClick.emit();
  }

  public Click(weather: WeatherObject) {
    this.onClick.emit(weather);
  }
}
