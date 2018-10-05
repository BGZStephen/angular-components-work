import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from '../../app.routes';
import * as components from './components/components-barrel';

@NgModule({
  declarations: [
    components.View,
    components.Report
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
})
export class WeatherModule {}
