import { TestBed } from '@angular/core/testing';

import { HttpClientKorisnikService } from './http-client-korisnik.service';

describe('HttpClientKorisnikService', () => {
  let service: HttpClientKorisnikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientKorisnikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
