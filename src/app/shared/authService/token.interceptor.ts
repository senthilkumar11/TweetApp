import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    console.log("intercepted request ... ");
    
    const authToken: string = this.authService.getToken();

    // cloned headers, updated with the authorization header.
    const authReq = request.clone({ headers: request.headers.set("Authorization", "Bearer " + authToken)});
    // send cloned request with header to the next handler.
    return next.handle(authReq)
    .pipe(
        catchError((error: any) => {
            
            console.log("Interceptor error ... "+ JSON.stringify(error));
            if (error.status === 401) {
                console.log("Interceptor code 401 ... ");
                //logout users, redirect to login page
                this.authService.logout();
                //redirect to the signin page or show login modal here
                this.router.navigate(['account/login']); 
                return error;
            }
    
            return error;
                
        }))
      }
}
