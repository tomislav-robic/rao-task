import { TestBed } from '@angular/core/testing';

import { HttpClientDrzavaService } from './http-client-drzava.service';

describe('HttpClientDrzavaService', () => {
  let service: HttpClientDrzavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientDrzavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
