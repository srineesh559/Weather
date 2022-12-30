import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailPageComponent } from './weather-detail-page.component';

describe('WeatherDetailPageComponent', () => {
  let component: WeatherDetailPageComponent;
  let fixture: ComponentFixture<WeatherDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDetailPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
