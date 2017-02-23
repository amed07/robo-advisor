"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var utils_1 = require("../utils");
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loginSuccessful = true;
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        return !this.checkTokenExpired();
    };
    AuthenticationService.prototype.clearUserDataAndRedirect = function () {
        localStorage.clear();
        this.router.navigate(['/sessionexpired']);
    };
    /**
     * Sends a login request
     *
     */
    AuthenticationService.prototype.login = function (body) {
        return this.http.post('/api/loginuser', body, utils_1.jsonHeader())
            .map(this.extractToken)
            .catch(this.handleError);
    };
    /**
     * Logout method to send a logout request to the server and clear localStorage
     */
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.isAuthenticated()) {
            this.postResource('', '/api/logoutuser')
                .subscribe(function (data) { return _this.handleLogout(data); }, function (error) {
                if (error.status === 401) {
                    _this.router.navigate(['/sessionexpired']);
                }
            }, function () { return console.log('got data'); });
        }
        else {
            this.clearUserDataAndRedirect();
        }
    };
    /**
     *
     * Post resource to send a post request to the server.
     * Extracts the current token from the local storage else redirects to
     * session expired modal.
     */
    AuthenticationService.prototype.postResource = function (body, url) {
        var token = localStorage.getItem('token');
        var headers = new http_1.Headers({ 'Authentication-Token': token });
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options);
    };
    /**
     * Get resource to fetch data from server using an end point as `url`
     */
    AuthenticationService.prototype.getResource = function (url) {
        var token = localStorage.getItem('token');
        var headers = new http_1.Headers({ 'Authentication-Token': token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(url, options);
    };
    AuthenticationService.prototype.extractToken = function (res) {
        var body = res.json();
        if (res.status === 200) {
            var response = 'response';
            var user = 'user';
            var tokenString = 'authentication_token';
            var token = body[response][user][tokenString];
            var maxTokenExpiryTime = Math.floor(new Date().getTime() / 1000) + Number(body[response][user]['token_age']);
            localStorage.setItem('token', token);
            localStorage.setItem('token_age', String(maxTokenExpiryTime));
        }
    };
    /**
     *
     * This function checks if the current token of the app has been expired
     * based on the first time authentication from server
     */
    AuthenticationService.prototype.checkTokenExpired = function () {
        var expiryTime = Number(localStorage.getItem('token_age'));
        var curTime = Math.floor(new Date().getTime() / 1000);
        if (curTime > expiryTime) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    /**
     *
     * On logout, clear the local storage and redirect to login page
     */
    AuthenticationService.prototype.handleLogout = function (data) {
        if (data.status === 200) {
            localStorage.clear();
            this.router.navigate(['/login']);
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map