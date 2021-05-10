import { TestBed } from '@angular/core/testing';

import { AllTweetService } from './all-tweet.service';

describe('AllTweetService', () => {
  let service: AllTweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
