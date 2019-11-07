import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {TodoListService} from "./todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  private items;
  constructor(private api: ApiService, private service: TodoListService) {}

  ngOnInit() {
    this.loadTodos();
    this.service.change.subscribe(() => this.loadTodos());
  }

  private loadTodos() {
    this.api.getTodos()
      .subscribe(response => {
        console.log(response);
        this.items = response;
      }, err => {
        console.log(err);
      });
  }

  public getItems() {
    return this.items;
  }
}
