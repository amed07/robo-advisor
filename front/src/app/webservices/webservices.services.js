"use strict";
var core_1 = require("@angular/core");
var authentication_1 = require("../authentication");
var WebService = (function () {
    function WebService(authService) {
        this.authService = authService;
    }
    WebService.prototype.ngOnInit = function () { };
    WebService.prototype.getDataFromBackend = function () {
        return this.authService.postResource('', '/api/getdata');
    };
    WebService.prototype.isAuthenticated = function () {
        if (!this.authService.isAuthenticated()) {
            this.authService.clearUserDataAndRedirect();
        }
    };
    return WebService;
}());
WebService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [authentication_1.AuthenticationService])
], WebService);
exports.WebService = WebService;
//# sourceMappingURL=webservices.services.js.map