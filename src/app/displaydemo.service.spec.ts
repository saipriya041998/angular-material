import { TestBed } from '@angular/core/testing';

import { DisplaydemoService } from './displaydemo.service';

describe('DisplaydemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaydemoService = TestBed.get(DisplaydemoService);
    expect(service).toBeTruthy();
  });
});
