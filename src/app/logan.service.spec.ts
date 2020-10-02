import { TestBed } from '@angular/core/testing';

import { LoganService } from './logan.service';

describe('LoganService', () => {
  let service: LoganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
