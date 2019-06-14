import { Component, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'sl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() activateLoading: boolean = false;
  @Input() activateDone: boolean = false;
  @Input() type: string = 'activate';
  @Output() clicked = new EventEmitter();

  @Input() test: boolean = true;
  constructor() {

  }
  activateClicked() {
    this.clicked.emit();
    
    if (this.test) {
      this.activateLoading = true;

      setTimeout(() => {
        this.activateDone = true;

        setTimeout(() => {
          this.activateDone = false;
          this.activateLoading = false;
        }, 1000)
      }, 3000)
    }

  }
}
