import { NgModule, ModuleWithProviders, ViewContainerRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {DropdownModule} from 'primeng/primeng';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { AppComponent }   from './app.component';
import {AppStoreComponent} from './components/layout-component/app-store/app-store-view.component';

import {BigDeltaViewComponent} from './components/andon-component/big-delta-view/big-delta-view.component';
import {MiniDeltaViewComponent} from './components/andon-component/mini-delta-view/mini-delta-view.component';
import {HourlyViewComponent} from './components/andon-component/hourly-view/hourly-view.component';
import {NioBitsViewComponent} from './components/online-monitoring-component/nIObits-view/nIObits-view.component';
import {ParameterTimeComponent} from './components/online-monitoring-component/parameter-time/parameter-time.component';
import {ShiftViewComponent} from './components/andon-component/shift-view/shift-view.component';
import {ShiftTimeViewComponent} from './components/andon-component/shift-time-view/shift-time-view.component';
import {HeaderUIAdminComponent} from './components/layout-component/header-ui-admin/header-ui-admin.component';
import {HeaderUICustomComponent} from './components/layout-component/header-ui-custom/header-ui-custom.component';
import {ClassOrientedManufacturing} from './components/class-oriented-manufacturing-component/class-oriented-manufacturing.component';

import {Observable} from 'rxjs/Rx';
import { WindowRef } from './WindowRef';

import { GoldenLayoutComponent }   from './components/layout-component/layout-ui-view/golden-layout.component';
import { GoldenLayoutCustomComponent }   from './components/layout-component/layout-ui-view/golden-layout-custom/golden-layout-custom.component';

import {AppStoreViewService} from './app-store-view.service';


import { ContextMenuModule } from './components/layout-component/layout-ui-view/angular2-contextmenu';

import { TabComponent } from './components/misc-component/tabs/tab.component';
import { TabsComponent } from './components/misc-component/tabs/tabs.component';
import {SpinnerComponent} from './components/misc-component/spinner-view/spinner-view.component';
import {ServiceUnavailableComponent} from './components/misc-component/service-unavailable-component/service-unavailable.component';
import {DropdownComponent} from './components/misc-component/drop-down-view/drop-down.component';
import {SettingsComponent} from './components/settings.component/settings.component';
import {SettingsService} from './components/settings.component/settings.service';
import {CustomService} from './components/custom-component/custom.service';
import {HeaderUiCustomService} from './components/layout-component/header-ui-custom/header-ui-custom.service';

import {AdminComponent} from './components/admin-component/admin.component';
import {CustomComponent} from './components/custom-component/custom.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing, ContextMenuModule, DropdownModule],

    declarations: [AppComponent, HeaderUIAdminComponent,HeaderUICustomComponent, BigDeltaViewComponent, MiniDeltaViewComponent, HourlyViewComponent, ShiftViewComponent,ShiftTimeViewComponent,
        GoldenLayoutComponent,GoldenLayoutCustomComponent, AppStoreComponent, ClassOrientedManufacturing, TabComponent, TabsComponent,
        NioBitsViewComponent, ParameterTimeComponent, SpinnerComponent, ServiceUnavailableComponent, DropdownComponent, SettingsComponent,AdminComponent,CustomComponent],

    entryComponents: [BigDeltaViewComponent, MiniDeltaViewComponent, HourlyViewComponent,
        ShiftViewComponent,ShiftTimeViewComponent, ClassOrientedManufacturing, TabComponent, TabsComponent,
        NioBitsViewComponent, ParameterTimeComponent, ServiceUnavailableComponent, DropdownComponent,SettingsComponent],

    providers: [AppStoreViewService, WindowRef, SettingsService,CustomService,HeaderUiCustomService],

    bootstrap: [AppComponent]
})
export class AppModule { }