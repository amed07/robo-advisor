"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/home']);
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    core_1.Component({
        template: "\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"span12\">\n        <div class=\"hero-unit center\">\n            <h1>Page Not Found <small><font face=\"Tahoma\" color=\"red\">Error 404</font></small></h1>\n            <br />\n            <p>The page you requested could not be found, either contact your webmaster or try again. Use your browsers <b>Back</b> button to navigate to the page you have prevously come from</p>\n            <p><b>Or you could just press this neat little button:</b></p>\n            <a (click)=\"redirectToLogin()\" class=\"btn btn-large btn-info\"> Take Me Home</a>\n          </div>\n          <br />\n          <!-- By ConnerT HTML & CSS Enthusiast -->\n      </div>\n    </div>\n  </div>\n    ",
        styles: ["\n   .center {text-align: center; margin-left: auto; margin-right: auto; margin-bottom: auto; margin-top: auto;}\n"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map