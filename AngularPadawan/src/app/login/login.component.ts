import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../user/user.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class LoginComponent{
    username='';
    password='';
    user = new User('admin', 'admin');
    auth=false;

    onValidation(){
        if((this.username === this.user.name) && (this.user.pass === this.password)){
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