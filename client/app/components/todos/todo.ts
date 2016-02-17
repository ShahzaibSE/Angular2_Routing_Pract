//  Import Libraries.
import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {ROUTER_DIRECTIVES,RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import component_path from './../../config';

@Component(
    {
        selector:'todo',
        templateUrl:component_path+'todos/todo.html',
        directives:[ROUTER_DIRECTIVES]
    }
)

export class Todo
{
    id:string;
    todos = ["a", "b" , "c"];
    
    todo:string;
    
    constructor(private routeParam:RouteParams)
    {
        this.id = routeParam.get("id");
        this.todo = this.todos[this.id];
    }
}