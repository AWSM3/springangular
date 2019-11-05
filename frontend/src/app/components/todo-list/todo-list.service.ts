import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  update() {
    console.log("updating todo list");
    this.change.emit();
  }
}
