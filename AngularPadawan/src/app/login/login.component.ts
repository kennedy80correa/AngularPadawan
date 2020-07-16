import { Component, ViewEncapsulation } from '@angular/core';
//import { User } from '../user/user.component';
import { usersList } from '../user/user.mock'; //chama a lista
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class LoginComponent {
    username = '';
    password = '';
    //user = new User('admin', 'admin', 'admin', 'admin', 'admin', 'admin');
    auth = false;
    validate = true;
    i = 0;

    localStorage: Storage;

    constructor(private router: Router) { this.localStorage = window.localStorage; }
    onValidation() {
        if (this.password !== '') {
            for (this.i = 0; this.i < usersList.length; this.i++) {
                if ((this.username === usersList[this.i].user) &&
                    (usersList[this.i].password === this.password) && (this.password !== '')) {
                    this.auth = true;
                    this.localStorage.setItem('validated', 'validated');
                    this.router.navigate(['/app-home']);
                }
            }
            if (this.auth===false)
                this.validate=false;
        }
    }

    getColor() {
        return this.auth === true ? 'green' : 'yellow';
    }

    onClear() {
        this.username = '';
        this.password = '';
        this.auth = false;
        this.validate = true;
    }
}