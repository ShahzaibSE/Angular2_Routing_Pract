System.register(['angular2/core', 'angular2/router', './../home/home', './../about/about', './../contacts/contact', './../menu/menu', './../../config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, about_1, contact_1, menu_1, config_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            //Creating Main Component.
            Main = (function () {
                function Main() {
                    //About Constructor.
                }
                Main = __decorate([
                    core_1.Component({
                        selector: 'main',
                        templateUrl: config_1.default + 'main/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES, menu_1.Menu]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_1.Home, useAsDefault: true },
                        { path: '/about', name: 'About', component: about_1.About },
                        { path: '/contact/...', name: 'Contact', component: contact_1.Contacts },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            })();
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main.js.map