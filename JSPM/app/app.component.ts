/**
 * Created by kevin on 12/03/2016.
 */
import {Component} from 'angular2/core';
import {ComponentWithExternalTemplate} from "./ComponentWithExternalTemplate/ComponentWithExternalTemplate";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}} {{ number }}</h1>
        <button (click)="increment()">Increment</button>
        <component-with-external-template></component-with-external-template>
    `,
    directives : [ ComponentWithExternalTemplate ]
})
export class AppComponent {
    title = 'Tests with JSPM';
    number = -1;

    increment() {
        this.number++;
    }
}

