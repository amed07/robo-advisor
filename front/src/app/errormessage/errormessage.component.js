"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var Email = (function () {
    function Email(emailAddress) {
        this.emailAddress = emailAddress;
    }
    return Email;
}());
var ErrorMessage = (function () {
    function ErrorMessage(router) {
        this.router = router;
        this.inputLogo = 'assets/img/angularclass-logo.png';
        this.textmessage = 'Forgot your password ?';
        this.emailModel = new Email('');
        var group = {};
        group.email = new forms_1.FormControl('', forms_1.Validators.required);
        group.type = new forms_1.FormControl('forgotpass');
        this.form = new forms_1.FormGroup(group);
    }
    ErrorMessage.prototype.resetPassword = function () {
        console.log('Reset email is ', this.form.value['email']);
        this.textmessage = 'Reset successful, redirecting !';
        // setTimeout(function() {
        //   window.location.reload();
        // }, 2000);
    };
    return ErrorMessage;
}());
ErrorMessage = __decorate([
    core_1.Component({
        selector: 'app-error-message',
        templateUrl: './errormessage.component.html',
        styleUrls: ['./errormessage.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ErrorMessage);
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=errormessage.component.js.map