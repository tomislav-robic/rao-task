import { TestBed } from '@angular/core/testing';

import { DrzaveService } from './drzava.service';

describe('DrzaveService', () => {
  let service: DrzaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrzaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
