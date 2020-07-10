import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styles:[`
        border-radius: 2%;
        border: 2px solid black;
    `]
})
export class InputComponent{
    name='';
    username='';
    enableButton=false;
    show = false;
    users = ['user1', 'user2'];


    constructor(){
        if(this.username != ''){
            this.enableButton=true;
        }
    }

    onInput(event: Event){
        this.name = 'Hello, ' + (<HTMLInputElement>event.target).value;
    }

    onAdd(){
        this.show = true;
        this.users.push(this.username);
    }

    onClear(){
        this.username='';
        this.show=false;
    }

    getColor(){
        return this.show === true ? 'green' : 'yellow';
    }

    onRemove(event : Event){
        this.users.pop();
    }
}