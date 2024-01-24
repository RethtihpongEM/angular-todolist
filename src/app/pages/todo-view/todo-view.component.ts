import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/ts/interfaces/todo.interfaces';
import {v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent{
  todoList: Todo [] = []

  constructor() {
    this.getTodos()
  }

  getTodos (){
    this.todoList = JSON.parse(localStorage.getItem('todos') || '[]')
  }

  deleteTask($event: number) {
    this.todoList.splice($event,1)
    this.updateTodoList()
    this.getTodos();
  }

  completeTask($event: number) {
    this.todoList[$event].isCompleted = !this.todoList[$event].isCompleted
    this.updateTodoList()
    this.getTodos();
  }

  updateTodoList (){
    localStorage.setItem("todos", JSON.stringify(this.todoList))
  }

  createTodo ($event: string) {
    const tempTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    tempTodos.push({
      id: uuidv4(),
      todo: $event,
      isCompleted:false,
      isEditing: false
    })
    localStorage.setItem("todos", JSON.stringify(tempTodos))
    this.getTodos()
  }
}
