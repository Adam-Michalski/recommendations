import {Headers, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';

import {APP_CONF} from '../../../assets/rest/app-conf.const';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RestHttp} from '../../shared/rest-http';

@Injectable()
export class RecommendationsService {



  constructor(private http: RestHttp) {
  }

  getAll(): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('SomeCustomHeader', 'another value');
    headers.append('Content-Type', 'application/json');
    const options: RequestOptionsArgs = new RequestOptions();
    options.headers = headers;
    return this.http.get(APP_CONF.REST.RECOMMENDATIONS_FILE, options).map(res => res.json());
  }

  accept(recommendationID: string): Observable<Response> {
    return this.http.put(APP_CONF.REST.ACCEPT.replace('{id}', recommendationID), {id: recommendationID}).map(res => res.json());
  }

  reject(recommendationID: string): Observable<Response> {
    return this.http.put(APP_CONF.REST.REJECT.replace('{id}', recommendationID), {id: recommendationID}).map(res => res.json());
  }


}
