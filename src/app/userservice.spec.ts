import { TestBed } from '@angular/core/testing';

import { Userservice } from './userservice';

describe('Userservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Userservice = TestBed.get(Userservice);
    expect(service).toBeTruthy();
  });
});
