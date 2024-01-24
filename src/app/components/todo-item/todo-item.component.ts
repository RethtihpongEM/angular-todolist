import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/ts/interfaces/todo.interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input({required:true}) todo?: Todo;
  @Input({required:true}) index?: number

  ngOnInit(): void {
    console.log(this.todo,this.index)
  }

}
