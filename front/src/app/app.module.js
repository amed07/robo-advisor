"use strict";
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var hmr_1 = require("@angularclass/hmr");
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = require("./environment");
var app_routes_1 = require("./app.routes");
// App is our top level component
var app_component_1 = require("./app.component");
var app_resolver_1 = require("./app.resolver");
var app_service_1 = require("./app.service");
var utils_1 = require("./utils");
var login_1 = require("./login");
var errormessage_1 = require("./errormessage");
var home_1 = require("./home");
var navbar_1 = require("./navbar");
var addGoals_1 = require("./addGoals");
var questionnaire_1 = require("./questionnaire");
var material_1 = require("@angular/material");
require("hammerjs");
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    app_service_1.AppState
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', store);
        this.appState._state = store.state;
        this.appRef.tick();
        delete store.state;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate elements
        var state = this.appState._state;
        store.state = state;
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.App],
        declarations: [
            app_component_1.App,
            home_1.HomeComponent,
            login_1.LoginFormComponent,
            errormessage_1.ErrorMessage,
            navbar_1.NavbarComponent,
            utils_1.SessionExpiredComponent,
            utils_1.PageNotFoundComponent,
            addGoals_1.AddGoalsComponent,
            questionnaire_1.QuestionnaireComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true }),
            material_1.MaterialModule.forRoot()
        ],
        providers: [
            environment_1.ENV_PROVIDERS,
            APP_PROVIDERS
        ],
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef, app_service_1.AppState])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map