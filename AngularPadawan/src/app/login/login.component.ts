import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../user/user.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class LoginComponent{

    user: User;
    username='';
    password='';
    auth=false;
    index = 0;
    message='';

    onValidation(){
        for(this.index=0; this.index < this.user.users.length;this.index++){
            if((this.username === this.user.users[this.index].name)){
                break;
            }
        }

        if(this.index === this.user.users.length)
            this.message = 'User not found';

        else if(this.password === this.user.users[this.index].pass){
            this.message = 'Access released';
            this.auth = true;
        }
        else
            this.message = 'Password Incorrect';
            
        
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