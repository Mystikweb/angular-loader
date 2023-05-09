import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationRootComponent } from './configuration-root.component';

const configurationRoutes: Routes = [
  { path: '', component: ConfigurationRootComponent }
];

@NgModule({
  imports: [RouterModule.forChild(configurationRoutes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
