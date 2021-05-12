import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpService } from 'src/app/service/base/http.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HttpClient,HttpService,JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }]
    });
    service = TestBed.inject(AuthService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
