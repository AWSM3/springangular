import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {ToDo} from "../../dto/ToDo";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {
  todo: ToDo;
  dataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.api.getTodo(this.route.snapshot.paramMap.get("id")).subscribe(response => {
      this.todo = <ToDo> response;
      this.dataLoaded = true;
    });
  }
}
