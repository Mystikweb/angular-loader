import { Route } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const projectaRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: DashboardComponent }
];
