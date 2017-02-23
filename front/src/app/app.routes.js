"use strict";
var utils_1 = require("./utils");
var login_1 = require("./login");
var errormessage_1 = require("./errormessage");
var home_1 = require("./home");
var addGoals_1 = require("./addGoals");
var questionnaire_1 = require("./questionnaire");
exports.ROUTES = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'login', component: login_1.LoginFormComponent },
    { path: 'sessionexpired', component: utils_1.SessionExpiredComponent },
    { path: 'forgot-password', component: errormessage_1.ErrorMessage },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'addGoals', component: addGoals_1.AddGoalsComponent },
    { path: 'questionnaire', component: questionnaire_1.QuestionnaireComponent },
    { path: '**', component: utils_1.PageNotFoundComponent },
];
//# sourceMappingURL=app.routes.js.map