import {Component, OnInit} from '@angular/core';
import {AuthManager} from "./service/auth-manager";

// определение компонента
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  constructor(private authManager: AuthManager) {}

  ngOnInit(): void {
    this.authManager.authFromSession();
  }
}
