import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeaterComponent } from './edit-heater.component';

describe('EditHeaterComponent', () => {
  let component: EditHeaterComponent;
  let fixture: ComponentFixture<EditHeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
