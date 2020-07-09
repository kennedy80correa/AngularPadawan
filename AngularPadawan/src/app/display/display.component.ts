import { Component } from '@angular/core';

@Component({
    selector: 'app-display',
    template: `
     <button (click)="onSubmit()">Submit</button>
     <p>{{submitMessage}}</p>
    `
})
export class DisplayComponent{
    submitMessage = '';

    onSubmit(){
        this.submitMessage = 'Thanks for register!';
    }
}