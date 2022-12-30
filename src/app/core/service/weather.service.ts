import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { WeatherObject } from '../model/weather';
import { GeoLocation } from '../model/geoLocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { API } from '../Utils/API';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(): Observable<WeatherObject> {
    return this.http.get<WeatherObject>(
      API.weatherUrl('17.053591', '82.177231')
    );
  }

  getGeoLocation(cityName: string): Observable<GeoLocation[]> {
    return this.http.get<GeoLocation[]>(API.geolocationconst(cityName));
  }

  getLocationWeather(cityName: string): Observable<WeatherObject> {
    return this.getGeoLocation(cityName).pipe(
      switchMap((userData) => {
        return this.http.get<WeatherObject>(
          API.weatherUrl(userData[0].lat.toString(), userData[0].lon.toString())
        );
      })
    );
  }

  getWeather(cityName: GeoLocation): Observable<WeatherObject> {
    return this.http.get<WeatherObject>(
      API.weatherUrl(cityName.lat.toString(), cityName.lon.toString())
    );
  }
}
