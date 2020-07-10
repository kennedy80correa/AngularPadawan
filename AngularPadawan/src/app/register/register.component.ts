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

  onRegister(){
    this.message = "Thanks for register!";
  }

  // onRegister(event: any, event: any, event: any){
  //   this.names.push((<HTMLInputElement>event.target).value);
  //   this.users.push((<HTMLInputElement>event.target).value);
  //   this.passwords.push((<HTMLInputElement>event.target).value);
  // }

 
}
