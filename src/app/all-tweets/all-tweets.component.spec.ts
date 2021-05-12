import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AllTweetsComponent } from './all-tweets.component';

describe('AllTweetsComponent', () => {
  let component: AllTweetsComponent;
  let fixture: ComponentFixture<AllTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
      declarations: [ AllTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
