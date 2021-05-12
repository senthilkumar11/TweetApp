import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerLogoFilename="../../assets/tweetLogo.jpg"
  isLoggedIn!:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.authenticated$.subscribe((data: boolean)=>{
      this.isLoggedIn=data;
      console.log(this.isLoggedIn)
    })
  }
  logout(){
    this.authService.logout();
  }

}
