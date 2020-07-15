import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  usersList: { 
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    user: string,
    password: string }[] = [];
  
  constructor( private userService : UserService ) { }
  ngOnInit() { this.usersList = this.userService.usersList }
  
  //variables: to update arrays
  name='';
  user='';
  password='';

  //variables to clear the form
  lastName='';
  email='';
  phone='';

  //var of type UserService to access its methods
  // userService: UserService;

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
