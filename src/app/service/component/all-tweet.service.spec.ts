import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../base/http.service';

import { AllTweetService } from './all-tweet.service';

describe('AllTweetService', () => {
  let service: AllTweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AllTweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
