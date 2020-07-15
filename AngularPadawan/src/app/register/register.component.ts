import { Component, OnInit } from '@angular/core';
import { usersList } from '../user/user.mock';
import { User } from '../user/user.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  
  constructor() {}
  ngOnInit(): void {}
  
  //form variables 
  name='';
  user='';
  password='';
  lastName='';
  email='';
  phone='';

  //var to create a new user
  newUser: User;

  createLogin(){
    this.newUser = new User(this.name, 
                            this.lastName, 
                            this.email, 
                            this.phone, 
                            this.user, 
                            this.password);
    usersList.push(this.newUser);
    this.clearForm();
  }

  clearForm(){
    this.name='';
    this.user='';
    this.password='';
    this.lastName='';
    this.email='';
    this.phone='';
  }

}