import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';
import { HttpService } from './service/base/http.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { TokenInterceptor } from './shared/authService/token.interceptor';
import {MatIconModule} from '@angular/material/icon';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AllTweetsComponent,
    TweetListComponent,
    AllUsersComponent
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
  providers: [HttpService,HttpClientModule,HttpClient,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
