import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherModule } from '../weather/weather.module';
import { QuizModule } from '../quiz/quiz.module';
import { FootballModule } from '../football/football.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutes } from '../../app.routes';

import { ApiService } from '../../services/api';

import * as components from './components/components-barrel';


@NgModule({
  declarations: [
    components.AppComponent,
    components.MenuComponent,
    components.ViewWrapper,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule,
    WeatherModule,
    FootballModule,
    QuizModule,
  ],
  providers: [ApiService],
  bootstrap: [components.AppComponent]
})
export class AppModule { }
