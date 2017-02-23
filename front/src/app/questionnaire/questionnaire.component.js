"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var authentication_1 = require("../authentication");
var router_1 = require("@angular/router");
var webservices_1 = require("../webservices");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
require("hammerjs");
var QuestionnaireComponent = (function () {
    function QuestionnaireComponent(http, router, webservice, dialog, fb) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.webservice = webservice;
        this.dialog = dialog;
        this.pageNumber = "1";
        this.tolerances = [
            { value: '1', display: 'Conservative' },
            { value: '2', display: 'Moderate' },
            { value: '3', display: 'Aggresive' }
        ];
        this.myForm = fb.group({
            'age': ['30', forms_1.Validators.required],
            'retireAge': ['65', forms_1.Validators.required],
            'income': ['40000', forms_1.Validators.required],
            'yearsRetired': ['35', forms_1.Validators.required],
            'incomeRetired': ['20000', forms_1.Validators.required],
            'rspSavings': ['', forms_1.Validators.required],
            'rspMonthlyContribution': ['', forms_1.Validators.required],
            'savings': ['', forms_1.Validators.required],
            'monthlyContribution': ['', forms_1.Validators.required],
            'riskTolerance': [],
        });
        this.age = this.myForm.controls['age'];
        this.retireAge = this.myForm.controls['retireAge'];
        this.income = this.myForm.controls['income'];
        this.yearsRetired = this.myForm.controls['yearsRetired'];
        this.incomeRetired = this.myForm.controls['incomeRetired'];
        this.rspSavings = this.myForm.controls['rspSavings'];
        this.rspMonthlyContribution = this.myForm.controls['rspMonthlyContribution'];
        this.savings = this.myForm.controls['savings'];
        this.monthlyContribution = this.myForm.controls['monthlyContribution'];
        this.riskTolerance = this.myForm.controls['riskTolerance'];
        // Invest to 100 years of age
        this.retireAge.valueChanges.subscribe(function (data) {
            _this.yearsRetired.setValue(100 - _this.retireAge.value);
        });
        // Want at least half of your current yearly income
        this.income.valueChanges.subscribe(function (data) {
            _this.incomeRetired.setValue(_this.income.value / 2);
        });
    }
    QuestionnaireComponent.prototype.onSubmit = function (form) {
        // On submit of the questionnaire, sumbmit to server.
        console.log('you submitted value:', form);
        window.scrollTo(0, 0);
        this.router.navigate(['/home']);
    };
    QuestionnaireComponent.prototype.ngOnInit = function () {
        this.webservice.isAuthenticated();
    };
    QuestionnaireComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
    };
    QuestionnaireComponent.prototype.clear = function () {
    };
    /**
     * Fetch the data from the python-flask backend
     */
    QuestionnaireComponent.prototype.getData = function () {
        var _this = this;
        this.webservice.getDataFromBackend()
            .subscribe(function (data) { return _this.handleData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('got data'); });
    };
    QuestionnaireComponent.prototype.handleData = function (data) {
        if (data.status === 200) {
            var receivedData = data.json();
        }
        console.log(data.json());
    };
    QuestionnaireComponent.prototype.logError = function (err) {
        console.log('There was an error: ' + err.status);
        if (err.status === 0) {
            console.error('Seems server is down');
        }
        if (err.status === 401) {
            this.router.navigate(['/sessionexpired']);
        }
    };
    return QuestionnaireComponent;
}());
QuestionnaireComponent = __decorate([
    core_1.Component({
        selector: 'questionnaire',
        templateUrl: './questionnaire.component.html',
        styleUrls: ['./questionnaire.component.css'],
        providers: [webservices_1.WebService, authentication_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router,
        webservices_1.WebService, material_1.MdDialog, forms_1.FormBuilder])
], QuestionnaireComponent);
exports.QuestionnaireComponent = QuestionnaireComponent;
//# sourceMappingURL=questionnaire.component.js.map