import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'available-list',
  templateUrl: './available-list.component.html',
})
export class AvailableList implements OnInit {
  @Input() players;
  @Output() onPlayerSelect: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {

  }

  selectPlayer(player) {
    this.onPlayerSelect.emit(player);
  }
}