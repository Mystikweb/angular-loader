import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { AppConfigurationComponent } from './components/app-configuration/app-configuration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'configuration',
    component: ConfigurationComponent,
    children: [
      {
        path: 'app',
        component: AppConfigurationComponent,
      },
      {
        path: 'projecta',
        loadChildren: () =>
          import('@loader/projecta').then((m) => m.ConfigurationModule),
      },
      {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'projecta',
    loadChildren: () =>
      import('@loader/projecta').then((m) => m.ProjectaModule),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
