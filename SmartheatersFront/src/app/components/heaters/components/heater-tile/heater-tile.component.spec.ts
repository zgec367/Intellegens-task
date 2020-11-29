import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterTileComponent } from './heater-tile.component';

describe('HeaterTileComponent', () => {
  let component: HeaterTileComponent;
  let fixture: ComponentFixture<HeaterTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaterTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
