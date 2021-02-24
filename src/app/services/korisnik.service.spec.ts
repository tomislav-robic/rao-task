import { TestBed } from '@angular/core/testing';

import { KorisniciService } from './korisnik.service';

describe('KorisniciService', () => {
  let service: KorisniciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KorisniciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
