import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
import { ReplyTweetComponent } from './reply-tweet/reply-tweet.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';
import { HttpService } from './service/base/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { TokenInterceptor } from './shared/authService/token.interceptor';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    AllTweetsComponent,
    TweetDetailsComponent,
    ReplyTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccountModule,
    MatIconModule
  ],
  providers: [HttpService,HttpClientModule,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
