import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '../model/page';
import { user } from '../model/user';
import { AccountService } from '../service/component/account.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  page:number=0;
  max:number=2;
  hasNext:boolean=true;
  userList:user[]=[];
  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(){
    this.accountService.getUserList(new Page(this.page,this.max)).subscribe((data:any)=>{
      if(data.length>0){
        this.userList=data;
        this.hasNext=true;
      }else{
        this.hasNext=false;
      }
      console.log(this.userList);
    })
  }
 next(){
    this.page++;
    this.getUserList();
  }
  prev(){
    this.page--
    this.getUserList();
  }
  viewTweets(user:any){
    localStorage.setItem("usernameTemp",user.username);
    console.log(user.username);
    // this.router.navigate(["user",user.id]);
  }
}
