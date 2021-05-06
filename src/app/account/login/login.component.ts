import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { login } from 'src/app/model/login';
import { AccountService } from 'src/app/service/component/account.service';
import { AuthService } from 'src/app/shared/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup=this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });;
  constructor(private router:Router,private fb:FormBuilder,private accountService:AccountService,private authService:AuthService) { }

  ngOnInit(): void {
  }
navigateToRegidter(){
  this.router.navigate(['/register']);
}
submit(){
  console.log("submit");
  let loginData=new login(this.loginForm.value.username,this.loginForm.value.password);
  this.authService.login(loginData).subscribe((result: any) => {
    this.router.navigate(['home']);   
  }, (err: { error: any; }) => {
    console.error(err.error);   
  });
  
}
}
