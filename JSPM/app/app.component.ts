/**
 * Created by kevin on 12/03/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}} {{ number }}</h1>
        <button (click)="increment()">Increment</button>
    `,
})
export class AppComponent {
    title = 'Tests with JSPM';
    number = -1;

    increment() {
        this.number++;
    }
}

