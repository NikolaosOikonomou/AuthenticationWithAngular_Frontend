import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component'
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent,canActivate:[AuthGuard]},
  {
    path: 'signup', component : UserComponent,
    children : [{path: '', component: SignUpComponent}]
  },
  {
    path: 'login', component : UserComponent,
    children : [{path: '', component: SignInComponent}]
  },
  {path: '', redirectTo:'/login', pathMatch: 'full'} //Default routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
