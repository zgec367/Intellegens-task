import { TestBed } from '@angular/core/testing';

import { HeaterApiService } from './heater-api.service';

describe('HeaterApiService', () => {
  let service: HeaterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
