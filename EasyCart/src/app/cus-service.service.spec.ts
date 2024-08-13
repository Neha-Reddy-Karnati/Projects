import { TestBed } from '@angular/core/testing';

import { CusServiceService } from './cus-service.service';

describe('CusServiceService', () => {
  let service: CusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
