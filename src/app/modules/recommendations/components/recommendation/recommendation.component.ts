import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Logger} from '@nsalaun/ng-logger';

@Component({
  selector: 'recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationComponent implements OnInit {

  @Input() item;
  @Output() accepted: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private logger: Logger) {}

  ngOnInit() {
  }

  accept(accepted) {
    this.accepted.emit(accepted);
  }

}
