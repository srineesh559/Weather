import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListViewComponent } from './weather-list-view.component';

describe('WeatherListViewComponent', () => {
  let component: WeatherListViewComponent;
  let fixture: ComponentFixture<WeatherListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherListViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
