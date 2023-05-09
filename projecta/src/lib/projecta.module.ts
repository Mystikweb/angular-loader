import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@loader/shared';

import { projectaRoutes } from './lib.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(projectaRoutes),
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
  ],
})
export class ProjectaModule { }
