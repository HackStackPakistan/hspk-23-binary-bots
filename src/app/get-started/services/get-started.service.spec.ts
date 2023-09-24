import { TestBed } from '@angular/core/testing';

import { GetStartedService } from './get-started.service';

describe('GetStartedService', () => {
  let service: GetStartedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStartedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
