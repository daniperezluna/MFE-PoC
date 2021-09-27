import { Component, HostListener } from '@angular/core';
import { SharedBalanceService } from 'shared-balance';

@Component({
  selector: 'mfe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthenticated: boolean = false;
  username: string = '';
  balance: number = 0;

  constructor(public sharedBalanceService: SharedBalanceService) {}

  @HostListener('document:mfe-login', ['$event'])
  login(e: any) {
    console.log('LOGIN');
    this.username = e.detail.username;
    this.sharedBalanceService.balance$;
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }
}
