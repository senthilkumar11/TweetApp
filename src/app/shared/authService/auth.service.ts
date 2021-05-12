import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { login } from 'src/app/model/login';
import { HttpService } from 'src/app/service/base/http.service';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  errorName!: string
  authenticated=new Subject<boolean>();
  public authenticated$ = this.authenticated.asObservable();

  constructor(private httpService: HttpService,private jwtService:JwtHelperService) {
  };
  login(login: login): Observable<boolean> {

    return this.httpService.post('api/auth/signin', login)
      .pipe(
        map((response: any) => {
          // login successful if there's a jwt token in the response
          let token = response.accessToken;

          if (token) {
            // store username and jwt token in local storage to keep user logged in between page refreshes
            this.extractLoginInfo(response);
            // return true to indicate successful login
            return true;
          } else {
            // return false to indicate failed login
            return false;
          }
        }),
      );
  }

  extractLoginInfo(result: any) {
    if (result.id) {
      this.setUserId(result.id);
    }
    if (result.username) {
      this.setUserName(result.username);
    }
    if (result.email) {
      this.setEmail(result.email);
    }
    if (result.accessToken) {
      this.setToken(result.accessToken);
    }
  }
  setUserId(id: string) {
    localStorage.setItem("id", id);
  }
  getUserId():any {
    return localStorage.getItem("id");
  }
  setUserName(userName: string) {
    localStorage.setItem("userName", userName);
  }
  getUserName(): any {
    return localStorage.getItem("userName");
  }
  setEmail(email: string) {
    localStorage.setItem("email", email);
  }
  getEmail():any {
    return localStorage.getItem("email");
  }
  setToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken():any {
    return localStorage.getItem("token");
  }
  logout() {
   localStorage.clear(); 
   this.authenticated.next(false);
  }
  validateToken(){
    let token=this.getToken();
    return token != "" ? !this.jwtService.isTokenExpired(token) : false;
  }
  isAuthenticated(){
    if(this.validateToken())
    {
      this.authenticated.next(true);
      return true;
    }else{
      this.authenticated.next(false);
      return false;
    }
  }
}





