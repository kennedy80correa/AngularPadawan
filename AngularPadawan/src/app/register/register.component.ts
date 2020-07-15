import { Component, OnInit } from '@angular/core';
//import { UserService } from '../user.service';
import { usersList } from '../user.mock'
import { User } from '../user/user.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  //providers: [UserService]
})

export class RegisterComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {}
  
  //variables: to update arrays
  name='';
  user='';
  password='';

  //variables to clear the form
  lastName='';
  email='';
  phone='';

  //var of type UserService to access its methods
  newUser: User;

  //i=0;
  createLogin(){
    this.newUser = new User(this.name, 
                                        this.lastName, 
                                        this.email, 
                                        this.phone, 
                                        this.user, 
                                        this.password);
    usersList.push(this.newUser);
    this.clearForm();

    //Just to list users registered
    // for(this.i=0; this.i < this.userService.usersList.length; this.i++)
    // console.log(this.userService.usersList[this.i].user); 
  }

  clearForm(){
    this.name='';
    this.user='';
    this.password='';
    this.lastName='';
    this.email='';
    this.phone='';
  }

    
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
