import { TestBed } from '@angular/core/testing';

import { HeaterReadingsApiService } from './heater-readings-api.service';

describe('HeaterReadingsApiService', () => {
  let service: HeaterReadingsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaterReadingsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
