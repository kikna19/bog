import {Component} from '@angular/core';
import {AccountsService} from "../services/accounts.service";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  date$ = new BehaviorSubject<Date>(new Date());

  constructor(
    public accountService: AccountsService
  ) {
  }

  get curDate() {
    return new Intl.DateTimeFormat('en-GB').format(this.date$.value)
  }
}
