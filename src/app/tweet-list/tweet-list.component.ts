import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tweet } from '../model/tweet';
import { HomeServiceService } from '../service/component/home-service.service';
import { AuthService } from '../shared/authService/auth.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {
  @Input() tweetList!: any;
  @Output() updateData: EventEmitter<any> = new EventEmitter();
  userId: string = this.authService.getUserId();
  newReply!: string;
  errorMsg: string = "Error";
  isError: boolean = false;
  constructor(private authService: AuthService, private homeService: HomeServiceService) { }

  ngOnInit(): void {
  }
  isLiked(likes: any[]) {
    if (likes)
      return likes.includes(this.userId);
    else
      return false;
  }
  postReply(tweetId: string, reply: string) {
    console.log(tweetId);
    this.newReply = reply
    console.log(this.newReply);


    if (this.newReply === undefined || this.newReply === null || this.newReply === "") {
      this.isError = true;
      this.errorMsg = "Tweet cannot be empty";
      return;
    }
    let hashTags = this.newReply.match(/#[a-z0-9_]+/g);
    console.log(hashTags);
    if (this.newReply.length < 0) {
      this.isError = true;
      this.errorMsg = "Tweet cannot be empty";
      return;
    }
    else if (this.newReply.length > 144) {
      this.isError = true;
      this.errorMsg = "Tweet length cannot be more than 144";
    }
    hashTags?.forEach((data) => {
      if (data.length > 50) {
        this.isError = true;
        this.errorMsg = "HashTag length cannot be more than 50";
        return;
      }
    })
    let newReply = new tweet();
    newReply.tweet = this.newReply;
    console.log(newReply);
    this.homeService.addReply(newReply, tweetId).subscribe(data => {
      console.log(data);
      this.newReply = "";
      this.updateData.emit(null);
    });

  }
  like(tweetid: string, tweet: any) {
    console.log(tweet.like);
    if (!tweet.like.includes(this.userId)) {
      this.homeService.addLike(tweetid).subscribe(data => {
        tweet.like.push(this.userId);
      })
    }
  }
  delete(tweetId: string) {
    this.homeService.delete(tweetId).subscribe(data => {
      this.updateData.emit(null);
    })
  }


}
