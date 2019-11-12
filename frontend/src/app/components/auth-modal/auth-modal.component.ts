import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthModalService} from "./auth-modal.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthManager} from "../../service/auth-manager";
import {map} from "rxjs/operators";
import {UserData} from "../../dto/UserData";

@Component({
  selector: 'auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  public authForm: FormGroup;

  constructor(
    private authModalService: AuthModalService,
    private element: ElementRef,
    private formBuilder: FormBuilder,
    private authManager: AuthManager) {}

  ngOnInit(): void {
    document.body.appendChild(this.element.nativeElement);
    this.element.nativeElement.style.display = 'none';

    this.authModalService.openEvent.subscribe(() => this.open());
    this.authModalService.closeEvent.subscribe(() => this.close());
    this.buildForm();
  }

  private buildForm(): void {
    this.authForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

  public open(): void {
    this.element.nativeElement.style.display = 'block';
    document.body.classList.add('auth-modal-open');
  }

  public close(): void {
    this.element.nativeElement.style.display = 'none';
    document.body.classList.remove('auth-modal-open');
  }

  public auth(): void {
    console.log('try to auth');
    this.authManager.auth(this.authForm.value.username, this.authForm.value.password).subscribe(() => {
      console.log('auth success');
      this.close();
    });
  }
}

