import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/authService/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "login",
    component: LoginComponent
  }, {
    path: "register",
    component: RegisterComponent,

  }, {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]

  }, {
    path: "tweets",
    component: AllTweetsComponent,
    canActivate: [AuthGuard]

  }, {
    path: "users",
    component: AllUsersComponent,
    canActivate: [AuthGuard]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
