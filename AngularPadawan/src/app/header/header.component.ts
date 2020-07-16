import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    // onAuthenticate(){       
    //     this.ok = localStorage.getItem('validated');

    //     if(this.ok === 'validated'){
    //         this.isAuthenticated = true;
    //         this.router.navigate(['/app-home']);
    //     }

    //     return this.isAuthenticated;
    // }
}