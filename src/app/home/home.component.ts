import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Page } from '../model/page';
import { tweet } from '../model/tweet';
import { HomeServiceService } from '../service/component/home-service.service';
import { AuthService } from '../shared/authService/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string = "";
  userId: string = ""
  tweet!: tweet;
  tweetList!: any[];
  newTweet!: string;
  newReply!:string;
  isError: boolean = false;
  errorMsg: string = "Error";
  constructor(private authService: AuthService, private homeService: HomeServiceService) { }

  ngOnInit(): void {
    this.username = this.authService.getUserName();
    this.userId = this.authService.getUserId();
    this.getAllTweet();
  }
 
  postTweet() {

    console.log(this.newTweet);
    if (this.newTweet === undefined || this.newTweet === null) {
      this.isError = true;
      this.errorMsg = "Tweet cannot be empty";
      return;
    }
    let hashTags = this.newTweet.match(/#[a-z0-9_]+/g);
    console.log(hashTags);
    if (this.newTweet.length < 0) {
      this.isError = true;
      this.errorMsg = "Tweet cannot be empty";
      return;
    }
    else if (this.newTweet.length > 144) {
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
    let newTweet = new tweet();
    newTweet.tweet = this.newTweet;
    console.log(newTweet);
    this.homeService.addTweet(newTweet).subscribe(data => {
      console.log(data);
      this.newTweet = "";
      this.getAllTweet();
    });
  }
  getAllTweet() {
    this.homeService.getAllTweetsOfUser(this.authService.getUserId(), new Page(0, 10)).subscribe((data: any) => {
      if (data)
        console.log(data);
      this.tweetList = data.map((val: any) => {
        var diffDays;
        if (val.date) {
          let tweetDate = new Date(val.date);
          let sec= Math.floor((new Date().getTime() - tweetDate.getTime()) / 1000);
          let min=Math.floor(sec/60);
          let hours=Math.floor(min/60);
          let days=Math.floor(hours/24);
         
         if(days>0)
          diffDays = days + " days ago";
          else if(hours>0)
          diffDays = hours + " hours ago";
          else if(min>0)
          diffDays=min+" mins ago"
          else 
          diffDays=sec+" secs ago"
        }
        let like:string[]=[];
        if (val.likes!=undefined&&val.likes!=null)
          like = val.likes.map((data: any) => {
            return data.id;
          })
       else{
        like=[];
       }
        return {
          id: val.id,
          tweet: val.tweet,
          date: diffDays,
          user: val.user,
          reply: val.reply,
          like: like,
          replyInputEnable:false
        }
      });

      console.log(this.tweetList);
    })

  }
}
