import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'selected-list',
  templateUrl: './selected-list.component.html',
})
export class SelectedList {
  @Input() players;
  @Output() onPlayerRemove: EventEmitter<number> = new EventEmitter<number>();

  selectPlayer(player) {
    this.onPlayerRemove.emit(player);
  }
}