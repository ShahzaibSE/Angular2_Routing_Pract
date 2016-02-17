//  Import Libraries.
import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

//Import Components.
import {Home} from './../home/home';
import {About} from './../about/about';
import {Contacts} from './../contacts/contact';
import  {Menu} from './../menu/menu';
import {Todo} from './../todos/todo';
import {Contact1} from './../contact1/contact1';
import {Contact2} from './../contact2/contact2';

import component_path from './../../config'

//Creating Main Component.

@Component(
    {
        selector:'main',
        templateUrl:component_path+'main/main.html',
        directives:[ROUTER_DIRECTIVES,Menu]
    }
)

@RouteConfig(
    [
        {path:'/home',name:'Home',component:Home,useAsDefault:true},
        {path:'/about',name:'About',component:About},
        {path:'/contact/...',name:'Contact',component:Contacts},
        //{path:'/todo/:id',name:'Todo',component:Todo}
    ]
)

export class Main
{
    constructor()
    {
        //About Constructor.
    }
}