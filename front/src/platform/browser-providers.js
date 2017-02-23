/*
 * These are globally available services in any component or any other service
 */
"use strict";
// Angular 2
var common_1 = require("@angular/common");
// Angular 2 Http
var http_1 = require("@angular/http");
// Angular 2 Router
var router_1 = require("@angular/router");
// Angular 2 forms
var forms_1 = require("@angular/forms");
var app_routes_1 = require("../app/app.routes");
var app_resolver_1 = require("../app/app.resolver");
/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
exports.APPLICATION_PROVIDERS = [
    // new Angular 2 forms
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
].concat(app_resolver_1.APP_RESOLVER_PROVIDERS, [
    router_1.provideRouter(app_routes_1.routes)
], http_1.HTTP_PROVIDERS, [
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);
exports.PROVIDERS = exports.APPLICATION_PROVIDERS.slice();
//# sourceMappingURL=browser-providers.js.map