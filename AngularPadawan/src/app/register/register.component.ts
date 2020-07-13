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
  
  constructor() { }

  ngOnInit(): void {
  }
  
  createLogin(){
    this.names.push(this.name);
    this.users.push(this.user);
    this.passwords.push(this.password);
    this.name='';
    this.user='';
    this.password='';
  }

  // u='';
  // p='';
  // i=0;
  // message='';
  // checkLogin(){
    
  //   for(this.i = 0; this.i < this.users.length; this.i++){
  //     if(this.users[this.i] === this.u)
  //       break;
  //   }

  //   if(this.i === this.users.length)
  //     this.message = 'User doesn\'t exist';

  //   else if(this.passwords[this.i] === this.p)
  //     this.message = 'Hi ' + this.names[this.i];

  //   else
  //     this.message='Password incorrect';
  // }
 
}
