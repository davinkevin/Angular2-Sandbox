/**
 * Created by kevin on 12/03/2016.
 */

import {Component, OnInit} from "angular2/core";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";

@Component({
    selector : 'emitter',
    template : `
        <div>
            Event Emitter : <button (click)="send()">Emmit Event</button>
        </div>
        `
})
export class EmitterComponent implements OnInit {

    @Output() emit : EventEmitter<any> = new EventEmitter();

    cpt : number = 0;

    ngOnInit():any {
        console.log("Init");
    }

    send() {
        this.emit.emit(this.cpt++);
    }
}