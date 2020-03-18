import { TestBed } from '@angular/core/testing';

import { MeteoServiceService } from './meteo-service.service';

describe('MeteoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeteoServiceService = TestBed.get(MeteoServiceService);
    expect(service).toBeTruthy();
  });
});
