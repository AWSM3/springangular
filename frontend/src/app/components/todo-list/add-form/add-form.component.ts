import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../../service/api.service";
import {Router} from "@angular/router";
import {TodoListService} from "../todo-list.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.sass']
})
export class AddFormComponent implements OnInit {
  readonly priority = ['LOW', 'NORMAL', 'HIGH'];
  readonly createUrl = "/rest/item/save";
  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService, private listService: TodoListService) {
    this.createForm();
  }

  createForm() {
    this.todoForm = this.formBuilder.group({
      subject: [''],
      text: [''],
      priority: [''],
      deadline: [''],
    });
  }

  createTodo() {
    this.api.saveTodo(this.todoForm).subscribe(response => {
      console.log("saving todo");
      console.log(response);
      this.listService.update();
    }, error => {
      console.log("error");
      console.log(error);
    });

    return false;
  }

  ngOnInit() {
  }
}
