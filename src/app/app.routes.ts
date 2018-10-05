import { Routes, RouterModule } from '@angular/router';
import * as appComponents from './modules/app/components/components-barrel';
import * as weatherComponents from './modules/weather/components/components-barrel';
import * as quizComponents from './modules/quiz/components/components-barrel';
import * as footballComponents from './modules/football/components/components-barrel';

const APP_ROUTES: Routes = [
  {path: '', component: appComponents.ViewWrapper, children: [
    {path: '', redirectTo: '/weather', pathMatch: 'full'},
    {path: 'weather', component: weatherComponents.View},
    {path: 'quiz', component: quizComponents.View},
    {path: 'football', component: footballComponents.View}
  ]}
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
