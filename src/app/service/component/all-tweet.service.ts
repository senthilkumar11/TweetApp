import { Injectable } from '@angular/core';
import { Page } from 'src/app/model/page';
import { UrlConstant } from 'src/app/shared/constants/urlConstant';
import { HttpService } from '../base/http.service';

@Injectable({
  providedIn: 'root'
})
export class AllTweetService {
  getAllTweetsOfUser(page: Page) {
    return this.httpService.get(UrlConstant.getAllTweet, "", page);
  }

  constructor(private httpService: HttpService) { }
}
