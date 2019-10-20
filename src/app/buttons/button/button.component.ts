import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  private _selected: boolean = false;

  @Input() text?: string;
  @Output() selectedEmitter = new EventEmitter();

  onClicked(): void {
    this.selectedEmitter.emit();
  }

  markAsSelected(): void {
    this._selected = true;
  }

  markAsNotSelected(): void {
    this._selected = false;
  }

  get isSelected(): boolean {
    return this._selected;
  }
}
