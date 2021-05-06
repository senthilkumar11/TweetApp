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

    let register = new Register(this.registerForm.value.username, this.registerForm.value.firstname, this.registerForm.value.lastname, this.registerForm.value.password, this.registerForm.value.e_mail, this.registerForm.value.phoneNumber);
    this.accountService.register(register).subscribe(result => {
      console.log(result);
    }, err => {
      console.log(err);
    })
    console.log(this.registerForm);
  }
}
