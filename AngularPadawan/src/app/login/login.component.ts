import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
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
    registeredUsername='';
    registeredPassword='';
    @Input() name: {username: string}
    @Output() pedido = new EventEmitter();

    username='';
    password='';
    user = new User('admin', 'admin', 'admin', 'admin', 'admin', 'admin');
    auth=false;
    pass='';

    localStorage: Storage;

    constructor(private router: Router){
        this.localStorage = window.localStorage;
    }
    
    onValidation(){
        this.registeredPassword = this.localStorage.getItem(this.password);
        this.pass = this.password;
        if(this.registeredPassword === this.pass){
            this.auth = true;
            this.router.navigate(['/app-home']);
            this.pedido.emit(this.username);
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