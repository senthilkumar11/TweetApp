import { Injectable } from '@angular/core';
import { login } from 'src/app/model/login';
import { Register } from 'src/app/model/register';
import { UrlConstant } from 'src/app/shared/constants/urlConstant';
import { HttpService } from '../base/http.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  register(register: Register) {
    console.log(register);
    return this.httpService.post(UrlConstant.registerUrl,register);
  }
  login(login:login) {
    console.log(login);

    return this.httpService.post(UrlConstant.loginUrl,login);
  }

  constructor(private httpService:HttpService) { }

}
