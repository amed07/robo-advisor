"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var authentication_1 = require("../authentication");
var router_1 = require("@angular/router");
var webservices_1 = require("../webservices");
var material_1 = require("@angular/material");
var HomeComponent = (function () {
    function HomeComponent(http, router, webservice, dialog) {
        this.http = http;
        this.router = router;
        this.webservice = webservice;
        this.dialog = dialog;
        this.heroes = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.webservice.isAuthenticated();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
    };
    HomeComponent.prototype.clear = function () {
        this.heroes = [];
    };
    /**
     * Fetch the data from the python-flask backend
     */
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.webservice.getDataFromBackend()
            .subscribe(function (data) { return _this.handleData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('got data'); });
    };
    HomeComponent.prototype.handleData = function (data) {
        if (data.status === 200) {
            var receivedData = data.json();
            this.heroes = receivedData['Heroes'];
        }
        console.log(data.json());
    };
    HomeComponent.prototype.logError = function (err) {
        console.log('There was an error: ' + err.status);
        if (err.status === 0) {
            console.error('Seems server is down');
        }
        if (err.status === 401) {
            this.router.navigate(['/sessionexpired']);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [webservices_1.WebService, authentication_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router,
        webservices_1.WebService, material_1.MdDialog])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map