import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'available-list',
  templateUrl: './available-list.component.html',
})
export class AvailableList implements OnInit {
  @Input() players;

  ngOnInit() {
    
  }
}