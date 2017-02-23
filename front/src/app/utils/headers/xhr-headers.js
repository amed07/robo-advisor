"use strict";
var http_1 = require("@angular/http");
function jsonHeader() {
    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    var options = new http_1.RequestOptions({ headers: headers });
    return options;
}
exports.jsonHeader = jsonHeader;
//# sourceMappingURL=xhr-headers.js.map