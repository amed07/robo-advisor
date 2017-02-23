"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var authentication_service_1 = require("../authentication/authentication.service");
var user_1 = require("../utils/user");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var LoginFormComponent = (function () {
    function LoginFormComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.inputLogo = 'assets/img/angularclass-logo.png';
        this.model = new user_1.UserComponent(1, '', '');
        this.logintext = 'Sign in to continue to the portal';
        this.color = 'black';
        this.forgotPassword = false;
        var group = {};
        group.username = new forms_1.FormControl('', forms_1.Validators.required);
        group.password = new forms_1.FormControl('', forms_1.Validators.required);
        group.type = new forms_1.FormControl('login');
        this.form = new forms_1.FormGroup(group);
    }
    LoginFormComponent.prototype.loginUser = function () {
        var _this = this;
        var body = JSON.stringify({
            'email': this.form.value['username'],
            'password': this.form.value['password']
        });
        this._service.login(body)
            .subscribe(function (data) {
            _this.router.navigate(['/questionnaire']);
        }, function (error) { return _this.handleError(error); });
    };
    LoginFormComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        this.color = 'red';
        this.logintext = errMsg;
        return Rx_1.Observable.throw(errMsg);
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        // Here we tell Angular that we want the form
        // directives to be available in this component
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login.component.js.map