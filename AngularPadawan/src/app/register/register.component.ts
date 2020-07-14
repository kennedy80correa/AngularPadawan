import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //arrays: save registers
  names = [];
  users = [];
  passwords = [];

  //variables: to update arrays
  name='';
  user='';
  password='';

  //variables to clear the form
  lastName='';
  email='';
  phone='';
  
    constructor() { }
    ngOnInit(): void {}

  createLogin(){
    this.names.push(this.name);
    this.users.push(this.user);
    this.passwords.push(this.password);
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
