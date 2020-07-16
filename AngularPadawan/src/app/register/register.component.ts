import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.component';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(private router: Router, private list: UserService) {}
  
  //form variables 
  name='';
  user='';
  password='';
  lastName='';
  email='';
  phone='';

  createLogin(){
    this.list.addUser(new User(this.name, 
                              this.lastName, 
                              this.email, 
                              this.phone, 
                              this.user, 
                              this.password));
    //this.clearForm();
    this.router.navigate(['/app-login']);
  }

  clearForm(){
    this.name='';
    this.user='';
    this.lastName='';
    this.email='';
    this.phone='';
    this.password='';
  }

}
