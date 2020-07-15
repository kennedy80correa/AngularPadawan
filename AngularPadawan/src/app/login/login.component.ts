import { Component, ViewEncapsulation } from '@angular/core';
//import { User } from '../user/user.component';
import { usersList } from '../user/user.mock'; //chama a lista
import { Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    //encapsulation: ViewEncapsulation.Emulated
})

export class LoginComponent{
    username='';
    password='';
    //user = new User('admin', 'admin', 'admin', 'admin', 'admin', 'admin');
    auth=false;
    i=0;

    constructor(private router: Router){}
    onValidation(){
        for(this.i=0; this.i < usersList.length; this.i++){
            if((this.username === usersList[this.i].user) && 
                (usersList[this.i].password === this.password)){
                this.auth = true;
                this.router.navigate(['/app-home']);
            }
        }  
    }

    // localStorage: Storage;

    // constructor(){
    //     this.localStorage = window.localStorage;
    // }

    // onValidation(){
    //     if((this.username === this.user.user) && (this.user.password === this.password)){
    //         this.localStorage.setItem('username', this.username);
    //         this.auth = true;
    //     }
    // }

    getColor(){
        return this.auth === true ? 'green' : 'yellow';
    }

    onClear(){
        this.username='';
        this.password='';
        this.auth=false;
    }
}