import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm!: NgForm;
  username!: string;

  @ViewChild('loginForm') form: any;

  constructor(private el: ElementRef) {}

  onSubmit(): void {
    if (this.form.valid) {
      this.dispatchLoginEvent();
    }
  }

  private dispatchLoginEvent(): void {
    const eventData = this.getEventData();
    window.dispatchEvent(
      new CustomEvent('mfe-login', eventData)
    );
    //console.info(`[mfe-login]: 'mfe-login' event dispached with:`, eventData);
  }

  private getEventData(): CustomEventInit {
    return {
      detail: { username: this.username },
      bubbles: true,
    };
  }
}
