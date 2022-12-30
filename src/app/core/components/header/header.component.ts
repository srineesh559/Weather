import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Constants } from '../../Utils/Constants';
import { WeatherObject } from 'src/app/core/model/weather';
import { GeoLocation } from '../../model/geoLocation';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  placeholder: string = Constants.searchPlaceHolder;
  userSearch: string = '';
  userSearchUpdate = new Subject<string>();

  readonly Constants = Constants;

  @Input() cityList: GeoLocation[] = [];
  selectedCity?: GeoLocation;
  @Output() searchValue = new EventEmitter<any>();

  constructor() {
    this.userSearchUpdate
      .pipe(debounceTime(1000)) //distinctUntilChanged()
      .subscribe((value) => {
        if (value) {
          this.cityList = [];
          this.searchValue.emit(value);
        }
      });
  }

  ngOnInit(): void {}

  displayFn(loc: GeoLocation): string {
    return loc.name;
  }
}
