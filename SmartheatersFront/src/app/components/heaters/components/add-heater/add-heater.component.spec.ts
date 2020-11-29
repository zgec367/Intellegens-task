import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeaterComponent } from './add-heater.component';

describe('AddHeaterComponent', () => {
  let component: AddHeaterComponent;
  let fixture: ComponentFixture<AddHeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
