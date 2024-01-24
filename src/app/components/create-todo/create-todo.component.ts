import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  todo: string = '';
  errMsg: string = '';
  isInvalid: boolean = false;

  @Output() createTodo = new EventEmitter<string>();

  addTodo() {
    this.isInvalid = false;
    this.errMsg = ''
    if (this.todo !== '') {
      this.createTodo.emit(this.todo);
      this.todo = '';
      return;
    }
    this.isInvalid = true;
    this.errMsg = 'Input Field is empty.'
  }
}
