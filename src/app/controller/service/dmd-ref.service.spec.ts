import { TestBed } from '@angular/core/testing';

import { DmdRefService } from './dmd-ref.service';

describe('DmdRefService', () => {
  let service: DmdRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmdRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
