/**
 * Created by kevin on 13/03/2016.
 */

import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[custom-highlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    @Input('custom-highlight') color: string;
    private _defaultColor = 'red';

    @Input()
    set defaultColor(colorName:string){
        this._defaultColor = colorName || this._defaultColor;
    }

    constructor(private el: ElementRef) { }

    onMouseEnter() { this.highlight(this.color || this._defaultColor); }
    onMouseLeave() { this.highlight(null); }

    private highlight(color:string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
