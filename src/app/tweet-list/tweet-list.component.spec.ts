import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { TweetListComponent } from './tweet-list.component';

describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
      declarations: [ TweetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
