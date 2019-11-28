import { TestBed } from '@angular/core/testing';

import { BreweriesServiceService } from './breweries-service.service';

describe('BreweriesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreweriesServiceService = TestBed.get(BreweriesServiceService);
    expect(service).toBeTruthy();
  });
});
