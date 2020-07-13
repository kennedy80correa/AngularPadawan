import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        *{
            font-family: 'arial';
        }
        .login{
            display: flex;
            justify-content: center;
            margin-top: 150px;
        }
        .signIn{
            display: block;
            justify-content: center;
            align-items: center;
            border: 5px solid black;
            border-radius: 4%;
            width: 400px;
            height: 350px;
            // background-image: linear-gradient(#1e84d0, #1ed0c4, #1e2ad0);
            box-shadow: 5px 10px 6px black;
        }
        h2{
            display: flex;
            justify-content: center;
            font-size: 40px;
            color: black;
        }

        .input-field{
            display: flex;
            justify-content: center;
            padding: 10px;
        }
        .input-field input {
            width: 200px;
            height: 25px;
            border-radius: 5px;
            margin-left: 10px;
            box-shadow: 3px 5px 6px black;
        }
        .input-field label{
            font-size: 25px;
            color: black;
        }
        .user{
            margin-left: 56px;
        }

        .register{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: 70px;
            width: 90px;
            height: 30px;
        }

        .register a{
            text-decoration-line: none;
            color: black;
            font-weight: bold;
        }

        .btn {
            width: 400px;
            height: 50px;
            font-size: 17px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .clear, .enter{
            margin: 10px;
            width: 70px;
            height: 30px;
            font-weight: bold;
            font-size: 17px;
            color: white;
            border-radius: 8px;
            border: 1px solid black;
            box-shadow: 1px 3px 6px black;
        }

        .clear{
            color: black;
            background-color: #c6c5c6;
        }

        .clear:hover{
            background-color: #ecebec;
        }

        .enter{
            margin-right: 40px;
            background-color: #1e84d0;
        }

        .enter:hover{
           background-color: #8ec1e7;
        }

        .message{
            display: flex;
            justify-content: center;
        }
    `]
})

export class LoginComponent{
    user='';
    password='';
    name='admin';
    pass='admin';
    auth=false;
    message='';

    onValidation(){
        if((this.user === this.name) && (this.pass === this.password)){
            this.auth = true;
        }
    }

    getColor(){
        return this.auth === true ? 'green' : 'yellow';
    }

    onClear(){
        this.user='';
        this.password='';
        this.auth=false;
    }

}