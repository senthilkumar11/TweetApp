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
  username:string="";
  tweet!:tweet;
  tweetList!:tweet[];
  constructor(private authService:AuthService,private homeService:HomeServiceService) { }

  ngOnInit(): void {
    this.username=this.authService.getUserName();
    this.homeService.getAllTweetsOfUser(this.authService.getUserId(),new Page(0,10)).subscribe((data:any)=>{
      if(data)
      this.tweetList=data;
      
    });
  }

}
