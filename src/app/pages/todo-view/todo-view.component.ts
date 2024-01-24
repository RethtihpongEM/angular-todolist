import { Component } from '@angular/core';
import { Todo } from 'src/app/ts/interfaces/todo.interfaces';
import {v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {
  todoList: Todo [] = [
    {
      id: '1asdfasf',
      todo: "Do homework",
      isCompleted: true,
      isEditing: false,
    },
    {
      id: 'sadf13',
      todo: "Complete UI",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 'asdfas21',
      todo: "Send to database",
      isCompleted: false,
      isEditing: false,
    },
  ]

  createTodo ($event: string) {
    this.todoList.push({
      id: uuidv4(),
      todo: $event,
      isCompleted:false,
      isEditing: false
    })
  }


}
