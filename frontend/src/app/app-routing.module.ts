import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoDetailComponent} from "./components/todo-detail/todo-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'todo-list', pathMatch: 'full'},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'todo/:id', component: TodoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
