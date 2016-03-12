/**
 * Created by kevin on 12/03/2016.
 */
import { Component }       from 'angular2/core';
import {Type} from "angular2/core";
import {EmitterComponent} from "./emitter.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <emitter (emit)="log($event)"></emitter>
    `,
    directives : [ EmitterComponent ]
})
export class AppComponent {
    title = 'Tests on EventEmitter';

    log($event) : void {
        console.log("Event logged");
        console.log($event);
    }
}

