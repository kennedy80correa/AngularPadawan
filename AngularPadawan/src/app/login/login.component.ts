import { Component, ViewEncapsulation, Input, EventEmitter } from '@angular/core';
import { User } from '../user/user.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class LoginComponent{
    // @Input() registeredUsername: string;
    // @Input() registeredPassword: string;
    registeredUsername='';
    registeredPassword='';

    username='';
    password='';
    user = new User('admin', 'admin', 'admin', 'admin', 'admin', 'admin');
    auth=false;

    localStorage: Storage;

    constructor(){
        this.localStorage = window.localStorage;
    }

    onValidation(){
        this.registeredUsername = this.localStorage.getItem('username');
        this.registeredPassword = this.localStorage.getItem('password');
        if((this.username === this.registeredUsername) && (this.registeredPassword === this.password)){
            this.localStorage.setItem('username', this.username);
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