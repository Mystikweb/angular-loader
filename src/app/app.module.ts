import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@loader/shared';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { AppConfigurationComponent } from './components/app-configuration/app-configuration.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ConfigurationComponent, AppConfigurationComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
