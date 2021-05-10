import { Component, OnInit } from '@angular/core';
import { Page } from '../model/page';
import { tweet } from '../model/tweet';
import { AllTweetService } from '../service/component/all-tweet.service';
import { AuthService } from '../shared/authService/auth.service';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.scss']
})
export class AllTweetsComponent implements OnInit {
  username: string = "";
  userId: string = ""
  tweet!: tweet;
  tweetList!: any[];
  
  page:number=0;
  max:number=2;
  hasNext:boolean=true;
  constructor(private authService: AuthService, private allTweetService: AllTweetService) { }

  ngOnInit(): void {
    this.username = this.authService.getUserName();
    this.userId = this.authService.getUserId();
    this.getAllTweet();
  }
 
 
  getAllTweet() {
    this.allTweetService.getAllTweetsOfUser( new Page(this.page, this.max)).subscribe((data: any) => {
      if (data.length>0){
        this.hasNext=true;
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
       let reply:any[]=[];
       if(val.reply!=undefined&&val.reply!=null){
         reply=val.reply.map((data:any)=>{
          var diffDays;
          if (data.date) {
            let tweetDate = new Date(data.date);
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
           return{
            id: data.id,
            tweet: data.tweet,
            date: diffDays,
            user: data.user,
           }
         })
       }
        return {
          id: val.id,
          tweet: val.tweet,
          date: diffDays,
          user: val.user,
          reply: reply,
          like: like,
          replyInputEnable:false
        }
      });
    }else{
      this.hasNext=false;
    }

      console.log(this.tweetList);
    })

  }
  next(){
    this.page++;
    this.getAllTweet();
  }
  prev(){
    this.page--
    this.getAllTweet();
  }

}
