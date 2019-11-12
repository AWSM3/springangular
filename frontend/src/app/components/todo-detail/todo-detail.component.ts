import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDo} from "../../dto/ToDo";
import {TodoService} from "../../service/api/todo.service";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {
  todo: ToDo;
  dataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodo(this.route.snapshot.paramMap.get("id")).subscribe(response => {
      this.todo = <ToDo> response;
      this.dataLoaded = true;
    });
  }
}
