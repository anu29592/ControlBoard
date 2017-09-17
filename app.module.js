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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var app_store_view_component_1 = require('./components/layout-component/app-store/app-store-view.component');
var big_delta_view_component_1 = require('./components/andon-component/big-delta-view/big-delta-view.component');
var mini_delta_view_component_1 = require('./components/andon-component/mini-delta-view/mini-delta-view.component');
var hourly_view_component_1 = require('./components/andon-component/hourly-view/hourly-view.component');
var nIObits_view_component_1 = require('./components/online-monitoring-component/nIObits-view/nIObits-view.component');
var parameter_time_component_1 = require('./components/online-monitoring-component/parameter-time/parameter-time.component');
var shift_view_component_1 = require('./components/andon-component/shift-view/shift-view.component');
var shift_time_view_component_1 = require('./components/andon-component/shift-time-view/shift-time-view.component');
var header_ui_admin_component_1 = require('./components/layout-component/header-ui-admin/header-ui-admin.component');
var header_ui_custom_component_1 = require('./components/layout-component/header-ui-custom/header-ui-custom.component');
var class_oriented_manufacturing_component_1 = require('./components/class-oriented-manufacturing-component/class-oriented-manufacturing.component');
var WindowRef_1 = require('./WindowRef');
var golden_layout_component_1 = require('./components/layout-component/layout-ui-view/golden-layout.component');
var golden_layout_custom_component_1 = require('./components/layout-component/layout-ui-view/golden-layout-custom/golden-layout-custom.component');
var app_store_view_service_1 = require('./app-store-view.service');
var angular2_contextmenu_1 = require('./components/layout-component/layout-ui-view/angular2-contextmenu');
var tab_component_1 = require('./components/misc-component/tabs/tab.component');
var tabs_component_1 = require('./components/misc-component/tabs/tabs.component');
var spinner_view_component_1 = require('./components/misc-component/spinner-view/spinner-view.component');
var service_unavailable_component_1 = require('./components/misc-component/service-unavailable-component/service-unavailable.component');
var drop_down_component_1 = require('./components/misc-component/drop-down-view/drop-down.component');
var settings_component_1 = require('./components/settings.component/settings.component');
var settings_service_1 = require('./components/settings.component/settings.service');
var custom_service_1 = require('./components/custom-component/custom.service');
var header_ui_custom_service_1 = require('./components/layout-component/header-ui-custom/header-ui-custom.service');
var admin_component_1 = require('./components/admin-component/admin.component');
var custom_component_1 = require('./components/custom-component/custom.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing, angular2_contextmenu_1.ContextMenuModule, primeng_1.DropdownModule],
            declarations: [app_component_1.AppComponent, header_ui_admin_component_1.HeaderUIAdminComponent, header_ui_custom_component_1.HeaderUICustomComponent, big_delta_view_component_1.BigDeltaViewComponent, mini_delta_view_component_1.MiniDeltaViewComponent, hourly_view_component_1.HourlyViewComponent, shift_view_component_1.ShiftViewComponent, shift_time_view_component_1.ShiftTimeViewComponent,
                golden_layout_component_1.GoldenLayoutComponent, golden_layout_custom_component_1.GoldenLayoutCustomComponent, app_store_view_component_1.AppStoreComponent, class_oriented_manufacturing_component_1.ClassOrientedManufacturing, tab_component_1.TabComponent, tabs_component_1.TabsComponent,
                nIObits_view_component_1.NioBitsViewComponent, parameter_time_component_1.ParameterTimeComponent, spinner_view_component_1.SpinnerComponent, service_unavailable_component_1.ServiceUnavailableComponent, drop_down_component_1.DropdownComponent, settings_component_1.SettingsComponent, admin_component_1.AdminComponent, custom_component_1.CustomComponent],
            entryComponents: [big_delta_view_component_1.BigDeltaViewComponent, mini_delta_view_component_1.MiniDeltaViewComponent, hourly_view_component_1.HourlyViewComponent,
                shift_view_component_1.ShiftViewComponent, shift_time_view_component_1.ShiftTimeViewComponent, class_oriented_manufacturing_component_1.ClassOrientedManufacturing, tab_component_1.TabComponent, tabs_component_1.TabsComponent,
                nIObits_view_component_1.NioBitsViewComponent, parameter_time_component_1.ParameterTimeComponent, service_unavailable_component_1.ServiceUnavailableComponent, drop_down_component_1.DropdownComponent, settings_component_1.SettingsComponent],
            providers: [app_store_view_service_1.AppStoreViewService, WindowRef_1.WindowRef, settings_service_1.SettingsService, custom_service_1.CustomService, header_ui_custom_service_1.HeaderUiCustomService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map