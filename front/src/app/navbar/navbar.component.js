"use strict";
var core_1 = require("@angular/core");
var authentication_1 = require("../authentication");
var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.inputLogo = 'assets/img/angularclass-logo.png';
    }
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'navbar',
        templateUrl: 'navbar.component.html',
        styleUrls: ['./navbar.component.css']
    }),
    __metadata("design:paramtypes", [authentication_1.AuthenticationService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map