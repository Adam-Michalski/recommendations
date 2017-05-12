import {BasicSharedModule} from '../../shared/basic-shared.module';
import {NgModule} from '@angular/core';
import {RecommendationComponent} from './components/recommendation/recommendation.component';
import {RecommendationsComponent} from './recommendations.component';
import {RecommendationsRoutingModule} from './recommendations.routing';

@NgModule({
  imports: [BasicSharedModule, RecommendationsRoutingModule],
  declarations: [RecommendationsComponent, RecommendationComponent]
})
export class RecommendationsModule {}
