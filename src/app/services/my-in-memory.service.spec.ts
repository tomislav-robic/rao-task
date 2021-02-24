import { TestBed } from '@angular/core/testing';

import { MyInMemoryService } from './my-in-memory.service';

describe('MyInMemoryService', () => {
  let service: MyInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
