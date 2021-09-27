import { TestBed } from '@angular/core/testing';

import { SharedBalanceService } from './shared-balance.service';

describe('SharedBalanceService', () => {
  let service: SharedBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
