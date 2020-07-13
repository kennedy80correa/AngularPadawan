import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeComponent} from '../home/home.component';
import{ FirstComponent} from '../home/first/first.component';

const routes: Routes = [
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'first',
    component: FirstComponent
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  name = '';
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['app-login'];
    });
  }
}