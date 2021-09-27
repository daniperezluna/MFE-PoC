import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedBalanceService {
  balance$: BehaviorSubject<number>;

  constructor() {
    this.balance$ = new BehaviorSubject(Math.random() * 1000);
  }

  updateBalance() {
    this.balance$.next(Math.random() * 1000);
  }
}
