import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

  weather = {
		get: (options = {}) =>
      this.processApiCall(_.assign({ method: 'get', url: 'http://api.openweathermap.org/data/2.5/group' }, options)),
  };
  
	processApiCall(options) {
		let url = options.url;

		if (options.query) {
			url = this.setUrlQuery(url, options.query);
		}

		return this.http[options.method](
			url,
		);
	}

	setUrlQuery(url, queryParamss) {
		let index = 0;
		for (const key of Object.keys(queryParamss)) {
			const prefix = index === 0 ? '?' : '&';
			url += `${prefix}${key}=${queryParamss[key]}`;
			index += 1;
		}

		return url;
  }
}
