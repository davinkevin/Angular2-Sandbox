/**
 * Created by kevin on 07/04/2016.
 */
import {Component} from 'angular2/core';
import template from './ComponentWithExternalTemplate.html!text';

@Component({
    selector : 'component-with-external-template',
    template : template
})
export class ComponentWithExternalTemplate{}