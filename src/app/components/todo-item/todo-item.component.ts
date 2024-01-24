import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/ts/interfaces/todo.interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
  @Input({required:true}) todo?: Todo;
  @Input({required:true}) index?: number

  @Output() completeActionBtn = new EventEmitter<number>();
  @Output() deleteTaskBtn = new EventEmitter<number>();

  completeTask():void {
    this.completeActionBtn.emit(this.index)
  }

  deleleTask():void {
    this.deleteTaskBtn.emit(this.index)
  }

}
