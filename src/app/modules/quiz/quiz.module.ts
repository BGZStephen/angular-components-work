import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutes } from '../../app.routes';
import * as components from './components/components-barrel';

@NgModule({
  declarations: [
    components.View,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule
  ],
  providers: [],
})
export class QuizModule {}
