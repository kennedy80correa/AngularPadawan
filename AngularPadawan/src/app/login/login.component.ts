import { Component, ViewEncapsulation, Input, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class LoginComponent implements OnInit{
    @Input() users: { username: string, password: string};

    usersList: { firstName: string,
                lastName: string,
                email: string,
                phone: string,
                user: string,
                password: string }[] = [];

    username='';
    password='';
    // user = new User('admin', 'admin', 'admin', 'admin', 'admin', 'admin');
    auth=false;

    constructor(private userService : UserService) {}

    ngOnInit(){
        this.usersList = this.userService.usersList;
    }
    
    onValidation(){
        if((this.users.username === this.userService.user) && (this.users.password === this.userService.password)){
            this.auth = true;
        }
    }

    getColor(){
        return this.auth === true ? 'green' : 'yellow';
    }

    onClear(){
        this.username='';
        this.password='';
        this.auth=false;
    }

}