import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TodoListService} from "../todo-list.service";
import {TodoService} from "../../../service/api/todo.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.sass']
})
export class AddFormComponent implements OnInit {
  readonly priority = ['LOW', 'NORMAL', 'HIGH'];
  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private todoService: TodoService, private listService: TodoListService) {
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
    this.todoService.saveTodo(this.todoForm).subscribe(response => {
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
