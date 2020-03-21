import { TestBed } from '@angular/core/testing';

import { NotloggedinGuard } from './notloggedin-guard.service';

describe('NotloggedinGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotloggedinGuard = TestBed.get(NotloggedinGuard);
    expect(service).toBeTruthy();
  });
});
