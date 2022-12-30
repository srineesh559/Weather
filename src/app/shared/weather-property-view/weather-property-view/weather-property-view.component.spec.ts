import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPropertyViewComponent } from './weather-property-view.component';

describe('WeatherPropertyViewComponent', () => {
  let component: WeatherPropertyViewComponent;
  let fixture: ComponentFixture<WeatherPropertyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherPropertyViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherPropertyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
