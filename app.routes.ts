// import {BarClusteredComponent } from './charts/BarClustered.component';
// import {EmptyRouteComponent } from './charts/EmptyRoute.component';
// import {DeltaViewComponent } from './viewComponents/deltaView.component';

// export const AppRoutes = [
//     {path: '', component: EmptyRouteComponent },
//     {path: 'charts/barclustered', component: BarClusteredComponent},
//     {path: 'deltaView', component: DeltaViewComponent}
// ];

import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// Components
import {AdminComponent} from './components/admin-component/admin.component';
import {CustomComponent} from './components/custom-component/custom.component';

const routes: Routes = [
    // Root
    { path: '', component: AdminComponent},
    { path: 'custom', component: CustomComponent},
];

// - Updated Export
export const routing = RouterModule.forRoot(routes); 