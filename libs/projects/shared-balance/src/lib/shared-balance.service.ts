import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedBalanceService {

  balance: BehaviorSubject<number>;
  constructor() {
    this.balance = new BehaviorSubject<number>(0);
  }

  calcBalance() {
    this.balance.next(Math.random() * 1000);
    return this.balance;
  }

  getBalance() {
    return this.balance;
  }
}
