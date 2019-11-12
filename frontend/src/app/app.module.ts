import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListModule } from "./components/todo-list/todo-list.module";
import { AddFormComponent } from './components/todo-list/add-form/add-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./service/api/api.service";
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { PermanentHeaderComponent } from './components/permanent-header/permanent-header.component';
import {TodoService} from "./service/api/todo.service";
import {AuthService} from "./service/api/auth.service";
import {AuthManager} from "./service/auth-manager";
import {AuthHttpInterceptor} from "./interceptor/auth-http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddFormComponent,
    TodoDetailComponent,
    AuthModalComponent,
    PermanentHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TodoService,
    AuthService,
    AuthManager,
    {provide:HTTP_INTERCEPTORS, useClass:AuthHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
