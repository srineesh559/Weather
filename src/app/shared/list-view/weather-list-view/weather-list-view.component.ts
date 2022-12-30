import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { WeatherObject } from 'src/app/core/model/weather';
import { Colors } from 'src/app/core/Utils/Colors';
import { Common } from 'src/app/core/Utils/Common';

@Component({
  selector: 'app-weather-list-view',
  templateUrl: './weather-list-view.component.html',
  styleUrls: ['./weather-list-view.component.scss'],
})
export class WeatherListViewComponent implements OnInit {
  @Input() cityclimate?: WeatherObject;
  @Output() favouritebtnClick = new EventEmitter<WeatherObject>();

  constructor() {}
  //"assets/images/icons/icon_mostly_sunny.svg"
  ngOnInit(): void {}

  getIcon(): string {
    return Common.GetIcon(this.cityclimate?.weather[0].icon, 'small');
  }

  getWeatherDescription(): string {
    if (this.cityclimate?.weather[0].description == undefined) {
      return '';
    }
    return this.cityclimate?.weather[0].description;
  }

  public changeFavourite() {
    this.favouritebtnClick.emit(this.cityclimate);
  }

  getbuttonImage(): String {
    return this.cityclimate?.isFavourite
      ? 'assets/images/icons/icon_favourite_Active.png'
      : 'assets/images/icons/icon_favourite_InActive.png';
  }

  getbackgroundColor() {
    return this.cityclimate?.isSetHome
      ? Colors.GeneralColors.Transparent2
      : Colors.GeneralColors.Transparent1;
  }

  getTitleColor() {
    return this.cityclimate?.isSetHome
      ? Colors.GeneralColors.Theme_Color
      : Colors.GeneralColors.Text_secondary;
  }
}
