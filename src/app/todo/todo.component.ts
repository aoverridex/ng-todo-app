import { Component } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

type ListItem = { text: string, checked: boolean }

@Component({
  selector: 'todo',
  template: `
    <div>
      <section>    
        <todo-input (submit)="handleOnSubmit($event)"></todo-input>
        <ul id="list-container">
          <todo-item 
            *ngFor="let item of items | async; index as index"
            [checked]="item.checked"
            [text]="item.text"
            [index]="index"
            (remove)="handleRemove(index)"
            (toggle)="handleToggle(index)">
          </todo-item>
        </ul>
      </section>
    </div>  
  `,
  styleUrls: [ 'todo.component.css' ]
})
export class Todo {

  itemsStore = [
    { text: 'my initial todo', checked: false },
    { text: 'Learn about Web Components', checked: true },
  ]

  itemsSubject = new BehaviorSubject<ListItem[]>([ ...this.itemsStore ])
  
  get items() {
    return this.itemsSubject.asObservable()
  }

  async handleOnSubmit(text: string) {
    this.itemsStore = [ ...this.itemsStore, { text, checked: false } ]
    this.itemsSubject.next(this.itemsStore)
  }

  handleToggle(value: any) {
    const index = parseInt(value)
    this.itemsStore[index].checked = !this.itemsStore[index].checked
    this.itemsSubject.next(this.itemsStore)
  }

  handleRemove(value: any) {
    const index = parseInt(value)
    this.itemsStore = [
      ...this.itemsStore.slice(0, index), 
      ...this.itemsStore.slice(index + 1)
    ]
    this.itemsSubject.next(this.itemsStore)
  }

}