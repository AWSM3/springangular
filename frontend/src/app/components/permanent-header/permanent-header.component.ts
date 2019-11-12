import {Component, OnInit} from '@angular/core';
import {AuthManager} from "../../service/auth-manager";
import {Router} from "@angular/router";
import {AuthModalService} from "../auth-modal/auth-modal.service";

@Component({
  selector: 'permanent-header',
  templateUrl: './permanent-header.component.html',
  styleUrls: ['./permanent-header.component.sass']
})
export class PermanentHeaderComponent implements OnInit {
  constructor(private authManager: AuthManager, private router: Router, private authModalService: AuthModalService) {}

  ngOnInit() {}

  public isAuthenticated(): boolean {
    return this.authManager.hasUserData();
  }

  public authModal(): void {
    console.log('clicked auth modal btn');
    this.authModalService.open();
  }

  public logout(): void {
    this.authManager.logout();
    this.router.navigate(['/']);
  }
}
