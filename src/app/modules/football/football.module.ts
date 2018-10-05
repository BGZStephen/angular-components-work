import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from '../../app.routes';
import * as components from './components/components-barrel';

@NgModule({
  declarations: [
    components.View,
    components.AvailableList,
    components.SelectedList,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    HttpModule
  ],
  providers: [],
})
export class FootballModule {}
