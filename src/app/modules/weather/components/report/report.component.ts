import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-report',
  templateUrl: './report.component.html',
})
export class Report implements OnInit {
  @Input() report;

  ngOnInit() {
    console.log(this.report);
  }
}