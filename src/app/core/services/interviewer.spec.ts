import { TestBed } from '@angular/core/testing';

import { Interviewer } from './interviewer';

describe('Interviewer', () => {
  let service: Interviewer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Interviewer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
