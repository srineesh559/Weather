import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-property-view',
  templateUrl: './weather-property-view.component.html',
  styleUrls: ['./weather-property-view.component.scss'],
})
export class WeatherPropertyViewComponent implements OnInit {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() value: string = '';

  ngOnInit(): void {}
}
