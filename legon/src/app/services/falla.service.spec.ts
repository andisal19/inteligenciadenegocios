import { TestBed } from '@angular/core/testing';

import { FallaService } from './falla.service';

describe('FallaService', () => {
  let service: FallaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FallaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
