import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  //variables: to update arrays
  name='';
  user='';
  lastName='';
  email='';
  phone='';
  password='';

  //var of type UserService to access its methods
  userService: UserService;

  //i=0;
  createLogin(){
    this.userService = new UserService(this.name, 
                                        this.lastName, 
                                        this.email, 
                                        this.phone, 
                                        this.user, 
                                        this.password);

    this.userService.addUser(this.userService);
    this.clearForm();
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