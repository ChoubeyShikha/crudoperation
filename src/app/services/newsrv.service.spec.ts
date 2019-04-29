import { TestBed } from '@angular/core/testing';

import { NewsrvService } from './newsrv.service';

describe('NewsrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsrvService = TestBed.get(NewsrvService);
    expect(service).toBeTruthy();
  });
});
