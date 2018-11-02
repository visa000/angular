import { TestBed } from '@angular/core/testing';

import { MobileRechargeAPIService } from './mobile-recharge-api.service';

describe('MobileRechargeAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileRechargeAPIService = TestBed.get(MobileRechargeAPIService);
    expect(service).toBeTruthy();
  });
});
