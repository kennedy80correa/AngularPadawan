import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user/user.component';
import { Router} from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
//import { User } from '../user/user.component';
import { usersList } from '../user/user.mock'; //chama a lista

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
       
export class LoginComponent {
    @Input() name: {username: string}
    @Output() pedido = new EventEmitter();

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
                    this.localStorage.setItem(`${this.i}`, '' + this.i);
                    this.router.navigate(['/app-home']);
                    this.pedido.emit(this.username);
                }
            }
            if (this.auth===false){
                this.validate=false;
                alert('User or Password incorrect!');
            }
        }
        if(this.password==='' && this.username ===''){
            this.validate = false;
            alert('User or Password incorrect!');
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