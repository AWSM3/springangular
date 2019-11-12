import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthModalService {
  @Output() openEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter();

  open() {
    console.log("open auth modal");
    this.openEvent.emit();
  }

  close() {
    console.log("close auth modal");
    this.closeEvent.emit();
  }
}
