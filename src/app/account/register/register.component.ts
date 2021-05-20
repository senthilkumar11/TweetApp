import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/model/register';
import { AccountService } from 'src/app/service/component/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errBol:boolean=false;
  errMsg:string="Error";
  success:boolean=false;
  registerForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    retypePass: new FormControl('', [Validators.required]),
    e_mail: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  });
  constructor(private fb: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    if(this.registerForm.value.password!=this.registerForm.value.retypePass)
    {
      console.log("register");
      this.errBol=true;
      this.errMsg="password is not matched with confiem password";
      return
    }
    if (this.registerForm.valid) {
      let register = new Register(this.registerForm.value.username, this.registerForm.value.firstname, this.registerForm.value.lastname, this.registerForm.value.password, this.registerForm.value.e_mail, this.registerForm.value.phoneNumber);
      this.accountService.register(register).subscribe(result => {
        this.registerForm.reset();
        this.errBol=false;
        this.success=true;
        console.log(result);
      }, err => {
        if (err.status == 400)
        {
          this.errBol=true;
          if(err.error.message!="")
          this.errMsg=err.error.message;
          else{
            this.errMsg="ERROR cannot  register now"
          }
          console.log(err.error);
        }
          console.log(err);
      })
      console.log(this.registerForm);
    }
    else{
      this.errBol=true;
      this.errMsg="Error All fields required"
    }
  }
}
