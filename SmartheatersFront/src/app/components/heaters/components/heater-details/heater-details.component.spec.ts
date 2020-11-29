import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterDetailsComponent } from './heater-details.component';

describe('HeaterDetailsComponent', () => {
  let component: HeaterDetailsComponent;
  let fixture: ComponentFixture<HeaterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
