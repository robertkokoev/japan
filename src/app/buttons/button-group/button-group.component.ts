import { Component, OnInit, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements AfterContentInit {

  @ContentChildren(ButtonComponent) buttons?: QueryList<ButtonComponent>

  ngAfterContentInit() {
    this.buttons!.forEach(b => b.selectedEmitter.subscribe(() => this.onButtonClicked(b)))
  }

  private onButtonClicked(button: ButtonComponent): void {
    this.buttons!.forEach(b => {
      b === button ? b.markAsSelected() : b.markAsNotSelected();
    });
  }

}
