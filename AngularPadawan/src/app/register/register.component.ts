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
  }
 
}
