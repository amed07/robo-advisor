"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var authentication_1 = require("../authentication");
var router_1 = require("@angular/router");
var webservices_1 = require("../webservices");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
require("hammerjs");
var AddGoalsComponent = (function () {
    function AddGoalsComponent(http, router, webservice, dialog, fb) {
        this.http = http;
        this.router = router;
        this.webservice = webservice;
        this.dialog = dialog;
        this.goals = [
            { value: 'Retirement', viewValue: 'Retirement' },
            { value: 'Buying a home', viewValue: 'Buying a home' },
            { value: 'Buying a car', viewValue: 'Buying a car' },
            { value: 'Other', viewValue: 'Other...' },
        ];
        this.scales = [
            { value: '1', viewValue: '1' },
            { value: '2', viewValue: '2' },
            { value: '3', viewValue: '3' },
            { value: '4', viewValue: '4' },
            { value: '5', viewValue: '5' },
            { value: '6', viewValue: '6' },
            { value: '7', viewValue: '7' },
            { value: '8', viewValue: '8' },
            { value: '9', viewValue: '9' },
            { value: '10', viewValue: '10' },
        ];
        this.goalForm = fb.group({
            'targetAmount': ['', forms_1.Validators.required],
        });
        this.targetAmount = this.goalForm.controls['targetAmount'];
    }
    AddGoalsComponent.prototype.ngOnInit = function () {
        this.webservice.isAuthenticated();
    };
    AddGoalsComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
    };
    AddGoalsComponent.prototype.clear = function () {
    };
    /**
     * Fetch the data from the python-flask backend
     */
    AddGoalsComponent.prototype.getData = function () {
        var _this = this;
        this.webservice.getDataFromBackend()
            .subscribe(function (data) { return _this.handleData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('got data'); });
    };
    AddGoalsComponent.prototype.handleData = function (data) {
        if (data.status === 200) {
            var receivedData = data.json();
        }
        console.log(data.json());
    };
    AddGoalsComponent.prototype.logError = function (err) {
        console.log('There was an error: ' + err.status);
        if (err.status === 0) {
            console.error('Seems server is down');
        }
        if (err.status === 401) {
            this.router.navigate(['/sessionexpired']);
        }
    };
    return AddGoalsComponent;
}());
AddGoalsComponent = __decorate([
    core_1.Component({
        selector: 'addGoals',
        templateUrl: './addGoals.component.html',
        styleUrls: ['./addGoals.component.css'],
        providers: [webservices_1.WebService, authentication_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router,
        webservices_1.WebService, material_1.MdDialog, forms_1.FormBuilder])
], AddGoalsComponent);
exports.AddGoalsComponent = AddGoalsComponent;
var Goal = (function () {
    function Goal(name, amount, years, months, importance) {
        this.name = name;
        this.amount = amount;
        this.years = years;
        this.months = months;
        this.importance = importance;
    }
    return Goal;
}());
exports.Goal = Goal;
//# sourceMappingURL=addGoals.component.js.map