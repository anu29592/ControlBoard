"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var big_delta_view_service_1 = require('./big-delta.view.service');
var http_1 = require('@angular/http');
var base_component_1 = require('./../../base-component/base.component');
var BigDeltaViewComponent = (function (_super) {
    __extends(BigDeltaViewComponent, _super);
    function BigDeltaViewComponent(_http, el, componentResolver) {
        _super.call(this, el);
        this.el = el;
        this.plant = "";
        this.cycleColor = "gray";
        this.getSmilyColor = function () {
            return "linear-gradient(to top," + this.cycleColor + ",white," + this.cycleColor + ")";
        };
        this.http = _http;
    }
    BigDeltaViewComponent.prototype.ngOnInit = function () {
        this.plant = "";
        this.title = "";
        this.state = "";
        this.baseService = new big_delta_view_service_1.BigDeltaViewService(this.serviceURL, this.http);
        this.action();
    };
    BigDeltaViewComponent.prototype.action = function () {
        var _this = this;
        this.baseService.dataChanged.subscribe(function (res) {
            try {
                _this.setavailableState();
                res = res.ViewData.AndonAllData.AndonAllData;
                _this.imagePath = "app/images/" + res.AndonModuleData.IMAGE;
                _this.cycleColor = res.BigAndonData.Smiley;
                _this.plant = res.AndonModuleData.PLANT;
                var nElm = $(_this.el.nativeElement);
                var element_1 = nElm.find(".divPlant" + _this.componentID)[0];
                var widthTopDiv = element_1.parentElement.offsetWidth;
                element_1.innerHTML = _this.plant;
                nElm = $(".divPlant" + _this.componentID);
                nElm.boxfit({ width: widthTopDiv });
                _this.title = res.AndonModuleData.TITLE;
                nElm = $(_this.el.nativeElement);
                element_1 = nElm.find(".divTitle" + _this.componentID)[0];
                element_1.innerHTML = _this.title;
                nElm = $(".divTitle" + _this.componentID);
                nElm.boxfit({ width: widthTopDiv });
                _this.station = res.AndonModuleData.STATION;
                nElm = $(_this.el.nativeElement);
                element_1 = nElm.find(".divStation" + _this.componentID)[0];
                element_1.innerHTML = _this.station;
                nElm = $(".divStation" + _this.componentID);
                nElm.boxfit({ width: widthTopDiv });
                _this.dofitCircle();
                nElm = $(_this.el.nativeElement);
                var widthdivTimeFormat = element_1 = nElm.find(".divTimeFormat" + _this.componentID)[0].offsetWidth;
                _this.state = "Aktualisiert";
                nElm = $(_this.el.nativeElement);
                element_1 = nElm.find(".divState" + _this.componentID)[0];
                element_1.innerHTML = _this.state;
                nElm = $('.divState' + _this.componentID);
                nElm.boxfit({ width: widthdivTimeFormat });
                var queryTime = res.BigAndonData.QueryTime;
                //date
                var d = queryTime.split("T");
                _this.date = d[0];
                nElm = $(_this.el.nativeElement);
                element_1 = nElm.find(".divDate" + _this.componentID)[0];
                element_1.innerHTML = _this.date;
                nElm = $('.divDate' + _this.componentID);
                nElm.boxfit({ width: widthdivTimeFormat });
                var d = queryTime.split("T");
                var newd = d[1];
                var newds = newd.split(".");
                _this.time = newds[0];
                nElm = $(_this.el.nativeElement);
                element_1 = nElm.find(".divTime" + _this.componentID)[0];
                element_1.innerHTML = _this.time;
                nElm = $('.divTime' + _this.componentID);
                nElm.boxfit({ width: widthdivTimeFormat });
                //let widthdivTypeFormat = $(this.el.nativeElement).find(".divTypeFormat"+this.componentID)[0].offsetWidth;
                _this.typeLabel = "Type";
                nElm = $(_this.el.nativeElement);
                element_1 = nElm.find(".divType" + _this.componentID)[0];
                element_1.innerHTML = _this.typeLabel;
                nElm = $('.divType');
                nElm.boxfit({ width: widthdivTimeFormat });
                _this.typeNumber = res.BigAndonData.TypeNumber;
                nElm = $(_this.el.nativeElement);
                element_1 = nElm.find(".divTypeNumber" + _this.componentID)[0];
                element_1.innerHTML = _this.typeNumber;
                nElm = $('.divTypeNumber' + _this.componentID);
                nElm.boxfit({ width: widthdivTimeFormat });
                nElm = $(_this.el.nativeElement);
                var widthcontainerDelta = nElm.find(".circleDelta" + _this.componentID)[0].offsetWidth;
                _this.delta = res.BigAndonData.Delta;
                nElm = $(_this.el.nativeElement);
                element_1 = nElm.find(".containerDelta" + _this.componentID)[0];
                element_1.innerHTML = _this.delta;
                element_1.style.height = widthcontainerDelta;
                nElm = $('.containerDelta' + _this.componentID);
                nElm.boxfit({ width: widthcontainerDelta });
            }
            catch (error) {
                _this.imagePath = "images/status_unknown.ico";
                _this.cycleColor = "gray";
                _this.dofitCircle();
                var nElm = $(_this.el.nativeElement);
                var element_2;
                var widthdivTimeFormat = element_2 = nElm.find(".divTimeFormat" + _this.componentID)[0].offsetWidth;
                _this.state = "unbekannt";
                nElm = $(_this.el.nativeElement);
                element_2 = nElm.find(".divState" + _this.componentID)[0];
                element_2.innerHTML = _this.state;
                nElm = $('.divState' + _this.componentID);
                nElm.boxfit({ width: widthdivTimeFormat });
                var currentdate = new Date();
                //date               
                nElm = $(_this.el.nativeElement);
                element_2 = nElm.find(".divDate" + _this.componentID)[0];
                element_2.innerHTML = currentdate.toLocaleDateString();
                nElm = $('.divDate' + _this.componentID);
                nElm.boxfit({ width: widthdivTimeFormat });
                nElm = $(_this.el.nativeElement);
                element_2 = nElm.find(".divTime" + _this.componentID)[0];
                element_2.innerHTML = currentdate.toLocaleTimeString();
                nElm = $('.divTime' + _this.componentID);
                nElm.boxfit({ width: widthdivTimeFormat });
                _this.typeLabel = "Type";
                nElm = $(_this.el.nativeElement);
                element_2 = nElm.find(".divType" + _this.componentID)[0];
                element_2.innerHTML = _this.typeLabel;
                nElm = $('.divType');
                nElm.boxfit({ width: widthdivTimeFormat });
                _this.typeNumber = "?";
                nElm = $(_this.el.nativeElement);
                element_2 = nElm.find(".divTypeNumber" + _this.componentID)[0];
                element_2.innerHTML = _this.typeNumber;
                nElm = $('.divTypeNumber' + _this.componentID);
                nElm.boxfit({ width: widthdivTimeFormat });
                nElm = $(_this.el.nativeElement);
                var widthcontainerDelta = nElm.find(".circleDelta" + _this.componentID)[0].offsetWidth;
                _this.delta = "?";
                nElm = $(_this.el.nativeElement);
                element_2 = nElm.find(".containerDelta" + _this.componentID)[0];
                element_2.innerHTML = _this.delta;
                element_2.style.height = widthcontainerDelta;
                nElm = $('.containerDelta' + _this.componentID);
                nElm.boxfit({ width: widthcontainerDelta });
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    BigDeltaViewComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    BigDeltaViewComponent.prototype.dofitCircle = function () {
        var nElm = $(this.el.nativeElement);
        var divCircle = nElm.find(".divCircle" + this.componentID)[0];
        nElm = $(this.el.nativeElement);
        var middleTop = nElm.find(".middleTop" + this.componentID)[0];
        nElm = $(this.el.nativeElement);
        var circlesDelta = nElm.find(".circleDelta" + this.componentID)[0];
        //let widthdivDelta = $(this.el.nativeElement).find('.divDelta'+this.componentID)[0].offsetWidth;
        if (middleTop.offsetHeight > divCircle.offsetWidth) {
            circlesDelta.style.width = divCircle.offsetWidth * 0.9 + "px";
            circlesDelta.style["padding-bottom"] = divCircle.offsetWidth * 0.9 + "px";
        }
        else {
            circlesDelta.style.width = middleTop.offsetHeight * 0.9 + "px";
            circlesDelta.style["padding-bottom"] = middleTop.offsetHeight * 0.9 + "px";
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BigDeltaViewComponent.prototype, "serviceURL", void 0);
    BigDeltaViewComponent = __decorate([
        core_1.Component({
            selector: 'delta-view',
            moduleId: module.id,
            templateUrl: 'big-delta-view.component.html',
            providers: [big_delta_view_service_1.BigDeltaViewService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, core_1.ElementRef, core_1.ComponentFactoryResolver])
    ], BigDeltaViewComponent);
    return BigDeltaViewComponent;
}(base_component_1.BaseComponent));
exports.BigDeltaViewComponent = BigDeltaViewComponent;
//# sourceMappingURL=big-delta-view.component.js.map