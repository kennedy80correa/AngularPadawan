import { Component } from '@angular/core';

@Component({
    selector: 'app-display',
    template: `
     <button (click)="onSubmit()">Submit</button>
     <p>{{submitMessage}}</p>
     <p>Don't have an account yet??</p>
     <p>Sign Up Now!</p>
     <button>Sign Up</button>
    `
})
export class DisplayComponent{
    submitMessage = '';

    onSubmit(){
        this.submitMessage = 'Welcome back!';
    }
}