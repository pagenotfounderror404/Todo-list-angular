import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';
import Todo from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> =new EventEmitter
  onSubmit(f:NgForm):void {
    const todo={
      sno:1,
      title:f.value.title,
      desc:f.value.desc,
      active:true
    }
    this.todoAdd.emit(todo)
  }

}
