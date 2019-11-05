import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {
  todo: object;
  dataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.api.getTodo(this.route.snapshot.paramMap.get("id")).subscribe(response => {
      this.todo = response;
      this.dataLoaded = true;
    });
  }
}
