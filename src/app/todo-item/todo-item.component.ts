import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'todo-item',
  template: `
    <li [ngClass]="{ 'item': true, 'completed': checked  }">
      <input type="checkbox" [checked]="checked" (click)="handleOnToggle()" />
      <label>{{text}}</label>
      <button class="destroy" (click)="handleOnRemove()">x</button>
    </li>
  `,
  styleUrls: [ './todo-item.component.css' ]
})
export class TodoItem {

  @Input() index: number = 0
  @Input() text: string = ''
  @Input() checked: boolean = false

  @Output() remove = new EventEmitter()
  @Output() toggle = new EventEmitter()

  handleOnRemove() {
    this.remove.emit(this.index)
  }

  handleOnToggle() {
    this.toggle.emit(this.index)
  }

}