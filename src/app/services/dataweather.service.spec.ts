import { TestBed } from '@angular/core/testing';

import { DataweatherService } from './dataweather.service';

describe('DataweatherService', () => {
  let service: DataweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
