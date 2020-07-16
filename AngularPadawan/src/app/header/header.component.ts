import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usersList } from '../user/user.mock'; //chama a lista

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    username:string;

    receberPedido(valor){
        this.username = valor;
        console.log("Valor passado: ",valor)
    }
    localStorage: Storage;
    ok='';
    isAuthenticated=false;
    

    constructor(private router: Router) { this.localStorage = window.localStorage; }

    // i: number;
    // onWelcome(){
    //     this.i = parseInt(localStorage.getItem('0'));
    //     this.username = usersList[this.i].firstName;
    //     this.isAuthenticated = true;
    //     console.log(this.username);
    // }

    // onAuthenticate(){       
    //     this.ok = localStorage.getItem('validated');

    //     if(this.ok === 'validated'){
    //         this.isAuthenticated = true;
    //         this.router.navigate(['/app-home']);
    //     }

    //     return this.isAuthenticated;
    // }
}