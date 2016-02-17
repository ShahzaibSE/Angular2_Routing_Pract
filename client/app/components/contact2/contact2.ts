//  Import Libraries.
import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import component_path from './../../config';

@Component(
    {
        selector:'contact2',
        templateUrl:component_path+'contact2/contact2.html',
        directives:[ROUTER_DIRECTIVES]
    }
)

export class Contact2
{
    constructor()
    {
        //About Constructor.
    }
}