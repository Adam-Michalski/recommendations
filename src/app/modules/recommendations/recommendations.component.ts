import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import {Logger} from '@nsalaun/ng-logger'
import {Observable} from 'rxjs/Observable';
import {RecommendationsService} from './recommendations.service';
import {Response} from '@angular/http';
import {RestHttp} from '../../shared/rest-http';

@Component({
  selector: 'recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationsComponent implements OnInit, OnDestroy {
  alive = true;
  position = 0;
  recommendations: Array<any>;

  constructor(private logger: Logger, private recommendService: RecommendationsService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.getRecommendations();
  }

  getRecommendations() {
    this.recommendService.getAll().takeWhile(() => this.alive).subscribe(res => {
      this.logger.log('getRecommendations: ', res);
      this.recommendations = res.recommendations;
      this.cd.markForCheck();
    })
  }

  /*
  * After succesfull put it should return actual recommendations array
  **/
  accepted(accepted, id) {
    this.logger.log(accepted);
    if (accepted) {
      this.recommendService.accept(id).takeWhile(() => this.alive).subscribe(res => {
        this.logger.log('accepted', res);
        // this.recommendations = res.recommendations;
      })

    } else {
      this.recommendService.reject(id).takeWhile(() => this.alive).subscribe(res => {
        this.logger.log('rejected', res);
        // this.recommendations = res.recommendations;
      })
    }
  }

  ngOnDestroy() {

    this.alive = false;

  }
  // next(pos) {
  //   this.position += pos;
  // }

}
