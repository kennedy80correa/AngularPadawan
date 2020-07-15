import { Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../user/user.component';
import { Router} from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class LoginComponent{
    @Input() name: {username: string}

    username='';
    password='';
    user = new User('admin', 'admin', 'admin', 'admin', 'admin', 'admin');
    auth=false;


    localStorage: Storage;

    constructor(private router: Router){
        this.localStorage = window.localStorage;
    }

    onValidation(){
        if((this.username === this.user.user) && (this.user.password === this.password)){
            this.localStorage.setItem('username', this.username);
            this.auth = true;
            this.router.navigate(['/app-home']);
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