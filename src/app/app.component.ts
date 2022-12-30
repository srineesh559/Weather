import { Component, OnInit } from '@angular/core';
import { WeatherObject } from './core/model/weather';
import { GeoLocation } from './core/model/geoLocation';
import { WeatherService } from './core/service/weather.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Constants } from './core/Utils/Constants';
import { ConfirmPopupComponent } from './core/pop-up/confirm-pop-up/confirm-popup/confirm-popup.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HeaderComponent } from './core/components/header/header.component';

export interface tab {
  title: string;
  errorMessage: string;
  getStatus(): void;
  buttonName: string;
  getCities(): WeatherObject[];
  change(weather: WeatherObject): void;
  clearAll(): void;
  SetToHome(weather: WeatherObject): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  today: number = Date.now();
  selectedWeather?: WeatherObject;
  allWeather: WeatherObject[] = [];
  cities: GeoLocation[] = [];

  dialogRef?: MatDialogRef<ConfirmPopupComponent>;
  readonly Constants = Constants;

  public userSearch: string = '';
  private key: string = 'savelocal';

  tabs: tab[] = [
    {
      title: Constants.favouite,
      errorMessage: Constants.noFavourites,
      getStatus: this.getFaviouriteStatus,
      buttonName: Constants.faviouriteButtonName,
      getCities: this.getFavouiteCities,
      change: this.changeFavourite,
      clearAll: this.clearAllFavourites,
      SetToHome: this.SetToHome,
    },
    {
      title: Constants.recentSearch,
      errorMessage: Constants.noSearchResults,
      getStatus: this.getFaviouriteStatus,
      buttonName: Constants.faviouriteButtonName,
      getCities: this.getSearchedCities,
      change: this.changeFavourite,
      clearAll: this.clearRecentSearch,
      SetToHome: this.SetToHome,
    },
  ];

  constructor(
    public readonly dialog: MatDialog,
    private weatherService: WeatherService
  ) {}

  ngOnChanges() {}

  ngOnInit(): void {
    this.getListFromLocalStorage();
    this.getCurrentSelectedWeather();
  }

  getListFromLocalStorage() {
    let localData = localStorage.getItem(this.key);
    if (localData) {
      this.allWeather = JSON.parse(localData);
    }

    if (this.allWeather && this.allWeather.length > 0) {
      this.selectedWeather = this.allWeather.filter((obj) => {
        return obj.isSetHome === true;
      })[0];
    }
  }

  getCurrentCityWeather(): void {
    this.weatherService
      .getCurrentWeather()
      .subscribe((cityWeather: WeatherObject) => {
        this.SetToHome(cityWeather);
        cityWeather.isSetHome = true;
        this.addCitytogroup(cityWeather);
      });
  }

  getSearchCityWeather(cityName: string): void {
    this.weatherService
      .getLocationWeather(cityName)
      .subscribe((cityWeather: WeatherObject) => {
        cityWeather.isFromSearch = true;
        this.SetToHome(cityWeather);
        cityWeather.isSetHome = true;
        this.addCitytogroup(cityWeather);
      });
  }

  getCityWeather(location: GeoLocation): void {
    this.weatherService
      .getWeather(location)
      .subscribe((cityWeather: WeatherObject) => {
        cityWeather.isFromSearch = true;
        this.SetToHome(cityWeather);
        cityWeather.isSetHome = true;
        this.addCitytogroup(cityWeather);
      });
  }

  getCitiesBySearch(cityName: any): void {
    if (typeof cityName === 'string') {
      this.weatherService.getGeoLocation(cityName).subscribe((x) => {
        this.cities = x.filter((obj) => {
          return obj.name
            .toLowerCase()
            .replace(/\s/g, '')
            .includes(cityName.replace(/\s/g, '').toLowerCase());
        });
      });
    } else {
      this.getCityWeather(cityName);
    }
  }

  getFaviouriteStatus(): string {
    return (
      `${this.getFavouiteCities().length}`.toString() + Constants.cityAdded
    );
  }

  clearAllFavourites() {
    this.dialogRef = this.dialog.open(ConfirmPopupComponent, {
      disableClose: false,
    });
    this.dialogRef.componentInstance.confirmationString = Constants.removeAll;
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allWeather = this.allWeather.filter((obj) => {
          return obj.isFavourite != true;
        });
      }
      if (this.allWeather.length <= 0) {
        this.getCurrentCityWeather();
      }
    });
  }

  clearRecentSearch() {
    this.dialogRef = this.dialog.open(ConfirmPopupComponent, {
      disableClose: false,
    });
    this.dialogRef.componentInstance.confirmationString = Constants.clearAll;
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allWeather = [];
        this.getCurrentCityWeather();
      }
    });
  }

  changeFav() {
    if (this.selectedWeather == undefined) {
      return;
    }
    this.selectedWeather.isFavourite = !this.selectedWeather.isFavourite;
  }

  changeFavourite(weather: WeatherObject) {
    weather.isFavourite = !weather.isFavourite;
  }

  getCurrentSelectedWeather() {
    if (this.selectedWeather == undefined) {
      this.getCurrentCityWeather();
    }
  }

  addCitytogroup(weather: WeatherObject) {
    var exist = this.allWeather.find((x) => x.id == weather.id);
    if (exist == null) {
      this.allWeather.push(weather);
    }
  }

  public getFavouiteCities(): WeatherObject[] {
    return this.allWeather?.filter((obj) => {
      return obj.isFavourite === true;
    });
  }

  getSearchedCities(): WeatherObject[] {
    return this.allWeather?.filter((obj) => {
      return obj.isFromSearch === true;
    });
  }

  SetToHome(weather: WeatherObject) {
    if (this.selectedWeather) {
      this.selectedWeather.isSetHome = false;
    }
    weather.isSetHome = true;
    this.selectedWeather = weather;
    localStorage.setItem(this.key, JSON.stringify(this.allWeather));
  }
}
