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
var AppStoreViewService = (function () {
    function AppStoreViewService(http) {
        this.http = http;
        this.addComponentChanged = new core_1.EventEmitter();
        this.baseUrl = "http://fe-z12ff.de.bosch.com:3088/getComponent";
        this.header = new http_1.Headers();
        this.header.append('Content-Type', 'application/xml');
        this.addComponentChanged = new core_1.EventEmitter();
    }
    AppStoreViewService.prototype.addComponent = function (componentContextMenu) {
        this.addComponentChanged.emit({ layout: this.layout, clickdContexMenu: componentContextMenu });
    };
    AppStoreViewService.prototype.getComponent = function () {
        return this.http.get(this.baseUrl, this.header)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AppStoreViewService.prototype.extractData = function (res) {
        return JSON.parse(xml2json(res.text(), '  ')).ArrayOfComponent;
        //return "";
    };
    AppStoreViewService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return errMsg;
    };
    AppStoreViewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppStoreViewService);
    return AppStoreViewService;
}());
exports.AppStoreViewService = AppStoreViewService;
//# sourceMappingURL=app-store-view.service.js.map