//-- Import Libraries.
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http'
import {provide} from 'angular2/core'

//Import Main Component.
import {Main} from './components/main/main'

//bootstrap Application.
bootstrap(Main,[ROUTER_PROVIDERS,HTTP_PROVIDERS
          ,provide(LocationStrategy,{useClass:HashLocationStrategy})]);