import { Component, OnInit } from '@angular/core';
import { WeatherObject } from '../core/model/weather';
import { GeoLocation } from '../core/model/geoLocation';
import { Constants } from '../core/Utils/Constants';

import { WeatherService } from '../core/service/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  today: number = Date.now();
  selectedWeather?: WeatherObject;

  cities: GeoLocation[] = [];

  readonly Constants = Constants;

  public userSearch: string = '';
  private key: string = 'savelocal';

  constructor(private router: Router, private weatherService: WeatherService) {}

  ngOnChanges() {}

  ngOnInit(): void {}

  getCityWeather(location: GeoLocation): void {
    this.weatherService.getWeather(location).subscribe((cityWeather: WeatherObject) => {
      cityWeather.isFromSearch = true;
      this.SetToHome(cityWeather);
      cityWeather.isSetHome = true;
      this.addCitytogroup(cityWeather);
    });
  }

  getCitiesBySearch(cityName: any): void {
    if (typeof cityName === 'string') {
      this.weatherService.getGeoLocation(cityName).subscribe(x => {
        this.cities = x.filter(obj => {
          return obj.name.toLowerCase().replace(/\s/g, '').includes(cityName.replace(/\s/g, '').toLowerCase());
        });
      });
    } else {
      this.getCityWeather(cityName);
    }
  }

  addCitytogroup(weather: WeatherObject) {
    var exist = this.weatherService.allWeather.find(x => x.id == weather.id);
    if (exist == null) {
      this.weatherService.allWeather.push(weather);
    }
  }

  SetToHome(weather: WeatherObject) {
    localStorage.setItem(this.key, JSON.stringify(this.weatherService.allWeather));
    this.weatherService.updateHome.next(weather);
  }
}



