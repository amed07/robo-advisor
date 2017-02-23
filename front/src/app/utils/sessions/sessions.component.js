"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SessionExpiredComponent = (function () {
    function SessionExpiredComponent(router) {
        this.router = router;
    }
    SessionExpiredComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    return SessionExpiredComponent;
}());
SessionExpiredComponent = __decorate([
    core_1.Component({
        selector: 'session-expired',
        template: "<div class=\"well center-block\" style=\"width:300px;\">\n                  <div class=\"panel panel-danger\">\n                  <div class=\"panel-heading text-center center-block\">\n                  Sorry your session has expired !</div>\n                  <div class=\"panel-body\">\n                    <a class=\"btn btn-large btn-info center-block\"\n                        (click)=\"redirectToLogin()\" >\n                        Login\n                    </a>\n                  </div>\n            </div>\n            </div>"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SessionExpiredComponent);
exports.SessionExpiredComponent = SessionExpiredComponent;
//# sourceMappingURL=sessions.component.js.map