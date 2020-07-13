import { Component, OnInit } from '@angular/core';

import { User } from '../user/user.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  //arrays: save registers
  // names = [];
  // users = [];
  // passwords = [];

  //array of User
  // us: User;

  //variables: to update array
  name='';
  user='';
  password='';

  //variables to clear the form
  lastName='';
  email='';
  phone='';
  
  constructor() { }

  ngOnInit(): void {
  }
  
  createLogin(){
    new User(this.name, this.user, this.password);
    this.onClear();
  }

  onClear(){
    this.name='';
    this.user='';
    this.password='';
    this.lastName='';
    this.email='';
    this.phone='';
  }




  // createLogin(){
  //   // this.names.push(this.name);
  //   // this.users.push(this.user);
  //   // this.passwords.push(this.password);
  // }
}
