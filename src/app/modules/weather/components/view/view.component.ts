import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api';

@Component({
  selector: 'weather-view',
  templateUrl: './view.component.html',
})
export class View implements OnInit {
  weatherReports: object[];
  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    this.api.weather.get({
      query: {
        id: '2643744,4749005,4219762',
        appid: 'f4bbeb8ec1a8fb95591f2cf112aaa575',
        units: 'metric'
      }
    }).subscribe(res => {
      this.weatherReports = res.list;
    })
  }
}