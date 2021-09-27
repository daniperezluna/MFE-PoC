import { SharedBalanceService } from 'shared-balance';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-books',
  templateUrl: './welcome-books.component.html',
  styleUrls: ['./welcome-books.component.scss']
})
export class WelcomeBooksComponent implements OnInit {

  constructor(public sharedBalanceService: SharedBalanceService) { }

  ngOnInit(): void {
  }

}
