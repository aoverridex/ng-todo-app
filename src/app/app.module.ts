import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TodoItem } from './todo-item/todo-item.component';
import { Todo } from './todo/todo.component';
import { TodoInput } from './todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItem,
    Todo,
    TodoInput
  ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
