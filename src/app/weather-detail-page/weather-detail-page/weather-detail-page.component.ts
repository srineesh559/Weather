import { Component, Input, OnInit, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { WeatherObject } from 'src/app/core/model/weather';
import { EventEmitter } from '@angular/core';
import { Constants } from 'src/app/core/Utils/Constants';
import { Colors } from 'src/app/core/Utils/Colors';
import { Common } from 'src/app/core/Utils/Common';
import { ActivatedRoute } from '@angular/router';

export interface WeatherAttribute {
  icon: string;
  title: string;
  value: string;
}

@Component({
  selector: 'app-weather-detail-page',
  templateUrl: './weather-detail-page.component.html',
  styleUrls: ['./weather-detail-page.component.scss'],
})
export class WeatherDetailPageComponent implements OnInit {
  @Input() weather?: WeatherObject;
  @Output() favouritebtnClick = new EventEmitter();
  private degreeKey: string = 'savebtnStatelocal';

  public tempDegree: string | null = 'true';

  public weatherAttributes: WeatherAttribute[] = [];
  readonly Constants = Constants;
  constructor(public route: ActivatedRoute) {
    this.tempDegree = localStorage.getItem(this.degreeKey);
    if (this.tempDegree) {
    }
  }

  ngOnChanges() {
    this.update();
  }

  changeTemperatureConv() {
    this.tempDegree = this.tempDegree === 'true' ? 'false' : 'true';
  }

  getTemperature(): string {
    if (this.weather?.main?.temp == undefined) {
      return '';
    }
    if (this.tempDegree === 'true') {
      return this.weather?.main?.temp.toString();
    }
    return ((this.weather?.main?.temp * 9) / 5 + 32).toFixed(2).toString();
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
    });
    this.update();
  }

  public trackItem(index: number, item: WeatherAttribute) {
    return item.value;
  }

  getWeatherDescription(): string {
    if (this.weather?.weather[0].description == undefined) {
      return '';
    }
    return this.weather?.weather[0].description;
  }

  getVisibility(): string {
    if (this.weather?.visibility == undefined) {
      return '';
    }
    return (this.weather?.visibility / 1000).toString();
  }

  update() {
    this.weatherAttributes = [
      {
        icon: 'assets/images/icons/icon_temperature_info.svg',
        title: 'Min - Max',
        value:
          this.weather?.main.temp_min +
          '\xB0' +
          '  -  ' +
          this.weather?.main.temp_max +
          '\xB0',
      },
      {
        icon: 'assets/images/icons/icon_precipitation_info.svg',
        title: 'Precipitation',
        value: '0' + ' %',
      },
      {
        icon: 'assets/images/icons/icon_humidity_info.svg',
        title: 'Humidity',
        value: this.weather?.main.humidity + ' %',
      },
      {
        icon: 'assets/images/icons/icon_wind_info.svg',
        title: 'Wind',
        value: this.weather?.wind.speed + ' mph',
      },
      {
        icon: 'assets/images/icons/icon_visibility_info.svg',
        title: 'Visibility',
        value: this.getVisibility() + ' km',
      },
    ];
  }

  public changeFavourite() {
    this.favouritebtnClick.emit();
  }

  getIcon(): string {
    return Common.GetIcon(this.weather?.weather[0].icon, 'big');
  }

  getColor(): string {
    return this.weather?.isFavourite
      ? Colors.GeneralColors.Theme_Color
      : Colors.GeneralColors.Text_secondary;
  }

  getbuttonTitle(): string {
    return this.weather?.isFavourite
      ? Constants.AddedToFavourite
      : Constants.AddToFavourite;
  }

  getbuttonImage(): String {
    return this.weather?.isFavourite
      ? 'assets/images/icons/icon_favourite_Active.png'
      : 'assets/images/icons/icon_favourite_InActive.png';
  }
}
