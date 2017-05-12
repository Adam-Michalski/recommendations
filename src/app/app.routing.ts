import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {APP_CONF} from '../assets/rest/app-conf.const';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: APP_CONF.ROUTES.ROOT, redirectTo: APP_CONF.ROUTES.RECOMMENDATIONS, pathMatch: 'full'},
  {path: APP_CONF.ROUTES.RECOMMENDATIONS, loadChildren: './modules/recommendations/recommendations.module#RecommendationsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, initialNavigation: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
