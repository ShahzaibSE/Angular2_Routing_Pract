//  Import Libraries.
import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {ROUTER_DIRECTIVES,RouteConfig,CanActivate} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import component_path from './../../config';

//Import Components.
import {Contact1} from './../contact1/contact1';
import {Contact2} from './../contact2/contact2';


@Component(
    {
        selector:'contact',
        templateUrl:component_path+'contacts/contact.html',
        directives:[ROUTER_DIRECTIVES,Contact1,Contact2]
    }
)

@RouteConfig([
    {path:'/contact1',name:'Contact1',component:Contact1,useAsDefault:true},
    {path:'/contact2',name:'Contact2',component:Contact2}
])

/*@CanActivate(
    
)*/

export class Contacts
{
    constructor()
    {
        //About Constructor.
    }
}