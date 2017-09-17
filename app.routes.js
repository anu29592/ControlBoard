// import {BarClusteredComponent } from './charts/BarClustered.component';
// import {EmptyRouteComponent } from './charts/EmptyRoute.component';
// import {DeltaViewComponent } from './viewComponents/deltaView.component';
"use strict";
var router_1 = require('@angular/router');
// Components
var admin_component_1 = require('./components/admin-component/admin.component');
var custom_component_1 = require('./components/custom-component/custom.component');
var routes = [
    // Root
    { path: '', component: admin_component_1.AdminComponent },
    { path: 'custom', component: custom_component_1.CustomComponent },
];
// - Updated Export
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map