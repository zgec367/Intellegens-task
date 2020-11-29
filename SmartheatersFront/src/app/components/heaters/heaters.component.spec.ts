import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatersComponent } from './heaters.component';

describe('HeatersComponent', () => {
  let component: HeatersComponent;
  let fixture: ComponentFixture<HeatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
