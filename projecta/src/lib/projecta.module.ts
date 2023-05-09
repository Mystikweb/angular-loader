import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { projectaRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(projectaRoutes),
    RouterModule.forChild(projectaRoutes),
  ],
})
export class ProjectaModule {}
