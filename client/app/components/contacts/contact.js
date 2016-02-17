System.register(['angular2/core', 'angular2/router', './../../config', './../contact1/contact1', './../contact2/contact2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, config_1, contact1_1, contact2_1;
    var Contacts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (contact1_1_1) {
                contact1_1 = contact1_1_1;
            },
            function (contact2_1_1) {
                contact2_1 = contact2_1_1;
            }],
        execute: function() {
            Contacts = (function () {
                function Contacts() {
                    //About Constructor.
                }
                Contacts = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        templateUrl: config_1.default + 'contacts/contact.html',
                        directives: [router_1.ROUTER_DIRECTIVES, contact1_1.Contact1, contact2_1.Contact2]
                    }),
                    router_1.RouteConfig([
                        { path: '/contact1', name: 'Contact1', component: contact1_1.Contact1, useAsDefault: true },
                        { path: '/contact2', name: 'Contact2', component: contact2_1.Contact2 }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Contacts);
                return Contacts;
            })();
            exports_1("Contacts", Contacts);
        }
    }
});
//# sourceMappingURL=contact.js.map