import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'todo-input',
  template: `
    <input 
      id="new-todo" 
      placeholder="What needs to be done?" 
      required 
      [(ngModel)]="text"
      (keyup)="onSubmit($event)" 
    />
  `,
  styleUrls: [ 'todo-input.component.css' ]
})
export class TodoInput {

  text: string = ''

  @Output() submit = new EventEmitter()

  onSubmit($event) {
    if ($event.keyCode === 13) {
      this.submit.emit(this.text)
      this.text = ''
    }
  }

} 