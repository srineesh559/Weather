import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListPageComponent } from './weather-list-page.component';

describe('WeatherListPageComponent', () => {
  let component: WeatherListPageComponent;
  let fixture: ComponentFixture<WeatherListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherListPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
