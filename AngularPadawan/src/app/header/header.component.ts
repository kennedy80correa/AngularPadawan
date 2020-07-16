import { Component} from '@angular/core';

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
}