import {Component, EventEmitter, OnInit} from '@angular/core';
import {TodoListService} from "./todo-list.service";
import {TodoService} from "../../service/api/todo.service";
import {AuthManager} from "../../service/auth-manager";
import {EventsBus} from "../../service/events.bus";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  private items;

  constructor(
    private todoService: TodoService,
    private service: TodoListService,
    private authManager: AuthManager,
    private eventsBus: EventsBus
  ) {}

  ngOnInit() {
    console.log(this.authManager.hasUserData());
    if (this.authManager.hasUserData()) {
      this.loadTodos();
    }
    this.eventsBus.forceDataUpdate.subscribe(() => this.loadTodos());
    this.service.change.subscribe(() => this.loadTodos());
  }

  private loadTodos() {
    this.todoService.getTodos()
      .subscribe(response => {
        console.log("success loading todos", response);
        this.items = response;
      }, err => {
        console.log("failed loading todos", err);
      });
  }

  public getItems(): Array<object> {
    return this.items;
  }

  public hasAuth(): boolean {
    return this.authManager.hasUserData();
  }
}
