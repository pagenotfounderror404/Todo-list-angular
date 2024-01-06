import { Component, EventEmitter, Input, Output } from '@angular/core';
import Todo from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todos-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent {
  @Input() todo!: Todo;
  @Input() i!:number
  @Output() todoDelete: EventEmitter<Todo> =new EventEmitter
  @Output() todoCheckbox: EventEmitter<Todo> =new EventEmitter
  onClick(todo:Todo){
    this.todoDelete.emit(todo)
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo)
  }
}
