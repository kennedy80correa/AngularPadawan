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
<<<<<<< HEAD
  
  createLogin(){
    this.names.push(this.name);
    this.users.push(this.user);
    this.passwords.push(this.password);
  }
=======

  Message(){
    this.message = "Thanks for register!";
  }

  onRegisterName(event: any){
    this.names.push((<HTMLInputElement>event.target).value);
  }

  onRegisterUser(event: any){
    this.users.push((<HTMLInputElement>event.target).value);
  }

  onRegisterPassword(event: any){
    this.passwords.push((<HTMLInputElement>event.target).value);
  }

  
  // onRegister(event: any, event: any, event: any){
  //   this.names.push((<HTMLInputElement>event.target).value);
  //   this.users.push((<HTMLInputElement>event.target).value);
  //   this.passwords.push((<HTMLInputElement>event.target).value);
  // }

>>>>>>> 4059e8248f2b4eb4f4ee75d3d3ee6d6e23cf5afb
 
}
