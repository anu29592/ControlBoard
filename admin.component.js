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
var hourly_view_component_1 = require('./../../components/andon-component/hourly-view/hourly-view.component');
var shift_view_component_1 = require('./../../components/andon-component/shift-view/shift-view.component');
var shift_time_view_component_1 = require('./../../components/andon-component/shift-time-view/shift-time-view.component');
var header_ui_admin_component_1 = require('./../../components/layout-component/header-ui-admin/header-ui-admin.component');
//import {PdfViewerWrapperComponent} from './viewComponents/pdf-viewer/pdf-viewer-wrapper.component';
var class_oriented_manufacturing_component_1 = require('./../../components/class-oriented-manufacturing-component/class-oriented-manufacturing.component');
var app_store_view_component_1 = require('./../../components/layout-component/app-store/app-store-view.component');
var spinner_view_component_1 = require('./../../components/misc-component/spinner-view/spinner-view.component');
var service_unavailable_component_1 = require('./../../components/misc-component/service-unavailable-component/service-unavailable.component');
var contextMenu_component_1 = require('./../../components/layout-component/layout-ui-view/contextMenu.component');
var contextMenu_service_1 = require('./../../components/layout-component/layout-ui-view/contextMenu.service');
var tab_component_1 = require('./../../components/misc-component/tabs/tab.component');
var tabs_component_1 = require('./../../components/misc-component/tabs/tabs.component');
var settings_component_1 = require('../../components/settings.component/settings.component');
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-view',
            moduleId: module.id,
            templateUrl: 'admin.component.html',
            providers: [header_ui_admin_component_1.HeaderUIAdminComponent, hourly_view_component_1.HourlyViewComponent, shift_view_component_1.ShiftViewComponent, shift_time_view_component_1.ShiftTimeViewComponent, class_oriented_manufacturing_component_1.ClassOrientedManufacturing,
                app_store_view_component_1.AppStoreComponent, contextMenu_component_1.ContextMenuComponent, contextMenu_service_1.ContextMenuService,
                tab_component_1.TabComponent, tabs_component_1.TabsComponent, spinner_view_component_1.SpinnerComponent, service_unavailable_component_1.ServiceUnavailableComponent, settings_component_1.SettingsComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map