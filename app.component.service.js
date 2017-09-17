"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_settings_1 = require('./settings/app.settings');
var AppComponentService = (function () {
    function AppComponentService(http) {
        this.http = http;
        this.appComponentChanged = new core_1.EventEmitter();
        this.header = new http_1.Headers();
        this.header.append('Content-Type', 'application/xml');
    }
    AppComponentService.prototype.getLayouts = function (selectedConfig) {
        var hostUrl = (window.location.protocol + '//' + window.location.host).replace("http://", "");
        var serviceUrl = app_settings_1.AppSettings.API_ENDPOINT + "/getLayouts?clientURL=" + hostUrl + "&nameModule=" + selectedConfig;
        return this.http.get(serviceUrl, this.header)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AppComponentService.prototype.extractData = function (res) {
        return JSON.parse(xml2json(res.text(), '  ')).ViewData.AndonAllData.AndonAllData;
        //return "";
    };
    AppComponentService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return errMsg;
    };
    AppComponentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponentService);
    return AppComponentService;
}());
exports.AppComponentService = AppComponentService;
//# sourceMappingURL=app.component.service.js.map