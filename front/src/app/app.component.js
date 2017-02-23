"use strict";
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var App = (function () {
    function App(appState) {
        this.appState = appState;
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State');
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        encapsulation: core_1.ViewEncapsulation.None,
        template: "<main>\n                <router-outlet></router-outlet>\n            </main>",
        styleUrls: ['./app.style.css']
    }),
    __metadata("design:paramtypes", [app_service_1.AppState])
], App);
exports.App = App;
//# sourceMappingURL=app.component.js.map