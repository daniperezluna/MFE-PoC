import { Component, ElementRef, OnInit } from '@angular/core';
import { SharedBalanceService } from 'shared-balance';

@Component({
  selector: 'mfe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  username: string = "";
  balance: number = 0;

  constructor(private el: ElementRef,
    private sharedBalanceService: SharedBalanceService) {}

  ngOnInit() {
    this.addLoginEventListener();
  }

  login(e: any) {
    this.username = e.detail.username;
    this.sharedBalanceService.calcBalance().subscribe(balance => {
      this.balance = balance;
    });
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
    window.dispatchEvent(new CustomEvent('mfe-login:logout'));
  }

  private addLoginEventListener(): void {
    window.addEventListener('mfe-login', (e: any) => this.login(e));
  }
}
