import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeServiceService } from './home-service.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

describe('HomeServiceService', () => {
  let service: HomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }]
    });
    service = TestBed.inject(HomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
