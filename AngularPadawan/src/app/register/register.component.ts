import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message = '';
  names = [];
  users = [];
  passwords = [];
  constructor() { }

  ngOnInit(): void {
  }

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

 
}
