import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
       
export class LoginComponent {

    username = '';
    password = '';

    constructor(private router: Router, private user: UserService) {}
    
    onValidation() {
        switch(this.user.validateLogin(this.username, this.password)){
            case 0:
                alert('Access released');
                this.router.navigate(['/app-home']);
                break;
            case 1:
                alert('Password incorrect');
                break;
            case 2:
                alert('User not found');
                break;
        }
    }

    onClear() {
        this.username = '';
        this.password = '';
    }
}