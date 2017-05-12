import {Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';

import {Injectable} from '@angular/core';
import {Logger} from '@nsalaun/ng-logger';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestHttp {

  defaultOptions: RequestOptions;

  constructor(private logger: Logger, private http: Http) {
    this.defaultOptions = new RequestOptions();
    this.defaultOptions.headers = new Headers()
    this.defaultOptions.headers.append('Bearer', 'some bearer token');
  }

  /**
   * Veryfies if custom options is avaiable.
   */
  getOptions(customOptions?: RequestOptionsArgs) {
    if (customOptions) {
      customOptions.headers = this.customMerge(customOptions.headers, this.defaultOptions.headers);
      return customOptions;
    } else {
      return this.defaultOptions;
    }
  }
  /**
   * Merges custom options with default options.
   * ugly but I cant figure out something fast with this headers
   */
  customMerge(headers: Headers, authHeaders: Headers): Headers {
    this.logger.log('headers', headers.keys(), authHeaders.values());
    const merged: Headers = new Headers();
    let keys = headers.keys();
    keys.forEach(key => {
      merged.append(key, headers.get(key));
    })
    keys = authHeaders.keys();
    keys.forEach(key => {
      merged.append(key, authHeaders.get(key));
    })
    this.logger.log('merged headers', merged);
    return merged;
  }

  /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(url, this.getOptions(options));
  }
  /**
   * Performs a request with `get` http method.
   */
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(url, this.getOptions(options));
  }
  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.post(url, body, this.getOptions(options));
  }
  /**
   * Performs a request with `put` http method.
   */
  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(url, body, this.getOptions(options));
  }
  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.delete(url, this.getOptions(options));
  }
  /**
   * Performs a request with `patch` http method.
   */
  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(url, body, this.getOptions(options));
  }
  /**
   * Performs a request with `head` http method.
   */
  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.head(url, this.getOptions(options));
  }
  /**
   * Performs a request with `options` http method.
   */
  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.options(url, this.getOptions(options));
  }
}
