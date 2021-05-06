import { Injectable } from '@angular/core';
import { Page } from 'src/app/model/page';
import { UrlConstant } from 'src/app/shared/constants/urlConstant';
import { HttpService } from '../base/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private httpService:HttpService) { }

  getAllTweetsOfUser(userId:String,page:Page){
    return this.httpService.get(UrlConstant.getUserTweets+"/"+userId,page);
  }
  

}
