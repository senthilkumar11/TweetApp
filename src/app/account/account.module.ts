import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../service/component/account.service';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule],
    providers:[AccountService]

})
export class AccountModule { }
