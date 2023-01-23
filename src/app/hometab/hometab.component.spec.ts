import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometabComponent } from './hometab.component';

describe('HometabComponent', () => {
  let component: HometabComponent;
  let fixture: ComponentFixture<HometabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HometabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
