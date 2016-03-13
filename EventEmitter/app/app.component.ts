/**
 * Created by kevin on 12/03/2016.
 */
import {Component, Type} from 'angular2/core';
import {EmitterComponent} from "./emitter.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}} {{ number }}</h1>
        <emitter (emit)="attach($event)"></emitter>
    `,
    directives : [ <Type>EmitterComponent ]
})
export class AppComponent {
    title = 'Tests on EventEmitter n°';
    number = -1;

    attach(n : number) : void {
        this.number = n;
    }
}

