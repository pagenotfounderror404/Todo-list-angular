import { Component, OnInit } from '@angular/core';
import Todo  from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodosItemComponent,AddTodoComponent,NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit{
  localItem!: string | null;
todos!: Todo[];

constructor() {
  this.localItem = localStorage.getItem('todos');

  if (this.localItem !== null) {
    this.todos = JSON.parse(this.localItem);
  } else {
    this.todos = [];
  }
}

  ngOnInit(): void {
    
  }
  deleteTodo(todo:Todo):void{
    console.log(todo)
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addTodo(todo:Todo):void{
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  toggleTodo(todo:Todo):void{
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
