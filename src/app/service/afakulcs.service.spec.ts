import { TestBed } from '@angular/core/testing';

import { AfakulcsService } from './afakulcs.service';

describe('AfakulcsService', () => {
  let service: AfakulcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfakulcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
