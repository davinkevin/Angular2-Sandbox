/**
 * Created by kevin on 13/03/2016.
 */
import { Component } from 'angular2/core';
import { HighlightDirective } from './highlight.directive';


@Component({
    selector: 'my-app',
    template: `
        <h1>My First Attribute Directive</h1>
        <h4>Pick a highlight color</h4>
        <div>
          <input type="radio" name="colors" (click)="color='lightgreen'">Green
          <input type="radio" name="colors" (click)="color='yellow'">Yellow
          <input type="radio" name="colors" (click)="color='cyan'">Cyan
        </div>
        <p [custom-highlight]="color">Highlight me!</p>
        <p [custom-highlight]="color" [defaultColor]="'violet'">
          Highlight me too!
        </p>
    `,
    directives : [ HighlightDirective ]
})
export class AppComponent{}
