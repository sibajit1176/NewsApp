import { TestBed } from '@angular/core/testing';

import { TcnewsapiService } from './tcnewsapi.service';

describe('TcnewsapiService', () => {
  let service: TcnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
