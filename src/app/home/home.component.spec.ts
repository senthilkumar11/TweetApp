import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HomeServiceService } from '../service/component/home-service.service';
import { AuthService } from '../shared/authService/auth.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ HomeComponent ],
      providers: [AuthService,HomeServiceService,JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
