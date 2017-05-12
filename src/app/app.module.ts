import {Logger, NgLoggerModule} from '@nsalaun/ng-logger';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {RecommendationsService} from './modules/recommendations/recommendations.service';
import {RestHttp} from './shared/rest-http';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgLoggerModule.forRoot(environment.logLevel),
  ],
  providers: [RestHttp, RecommendationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
