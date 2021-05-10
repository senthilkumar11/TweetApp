import { Injectable } from '@angular/core';
import { Page } from 'src/app/model/page';
import { tweet } from 'src/app/model/tweet';
import { AuthService } from 'src/app/shared/authService/auth.service';
import { UrlConstant } from 'src/app/shared/constants/urlConstant';
import { HttpService } from '../base/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  addLike(tweetId: string) {
    let userId=this.authService.getUserId();
    return this.httpService.put(UrlConstant.tweet+"/"+userId+"/like/"+tweetId);  
  }
  addReply(newReply: tweet,tweetId:String) {
    let userId=this.authService.getUserId();
    return this.httpService.post(UrlConstant.tweet+"/"+userId+"/reply/"+tweetId,newReply);
  }
  addTweet(tweet:tweet) {
    let userId=this.authService.getUserId();
    return this.httpService.post(UrlConstant.tweet+"/"+userId+"/add",tweet);
  }

  constructor(private httpService:HttpService,private authService:AuthService) { }

  getAllTweetsOfUser(userId:String,page:Page){
    return this.httpService.get(UrlConstant.getUserTweets+"/"+userId, page);
  }
  

}
