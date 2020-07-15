import { Component, ViewEncapsulation, Input, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user/user.component'
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})

export class LoginComponent implements OnInit{
    @Input() users: { username: string, password: string};

    usersList: User[];

    // username='';
    // password='';
    // user = new User('admin', 'admin', 'admin', 'admin', 'admin', 'admin');
    auth=false;

    constructor(private router: Router, private userService : UserService) {} 

    ngOnInit(){
        this.usersList = this.userService.getUser();
    }
    
    onValidation(){
        if((this.users.username === this.usersList[0].user) && (this.users.password === this.usersList[0].password)){
            this.auth = true;
            this.router.navigate(['/app-home']);
        }
    }

    getColor(){
        return this.auth === true ? 'green' : 'yellow';
    }

    onClear(){
        this.users.username='';
        this.users.password='';
        this.auth=false;
    }

}