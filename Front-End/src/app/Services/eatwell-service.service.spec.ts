import { TestBed } from '@angular/core/testing';

import { EatwellServiceService } from './eatwell-service.service';

describe('EatwellServiceService', () => {
  let service: EatwellServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EatwellServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
