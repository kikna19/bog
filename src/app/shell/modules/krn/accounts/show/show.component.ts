import {Component, OnInit} from '@angular/core';
import {AccountsService} from "../../../../../services/accounts.service";
import {switchMap} from "rxjs/operators";
import {Router} from "@angular/router";
import {Account, assertType, Client} from "../../../../../shared/user.interface";
import {LoaderService} from "../../../../../services/loader.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  token!: string;
  clientKey!: number;
  accounts: Account[] = [];
  user!: Client;
  columns: string[] = ['owner', 'name', 'amount', 'icon'];
  type = (el: any) => assertType<Account>(el);

  constructor(
    private accountService: AccountsService,
    public loaderService: LoaderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('client') || '');
    this.clientKey = JSON.parse(localStorage.getItem('clientKey') || '');
    this.accountService.getAccounts(this.clientKey).pipe(
      this.loaderService.useLoading,
    ).subscribe(
      (res: any) => this.accounts = res,
    )
  }

  deleteAccount(accountKey: number) {
    this.accountService.deleteAccount(accountKey).pipe(
      switchMap(_ => this.accountService.getUsers(this.user.firstName, this.user.lastName, this.user.clientKey)),
    ).subscribe(
      user => {
        localStorage.removeItem('client');
        localStorage.setItem('client', JSON.stringify(user[0]));
        localStorage.removeItem('changed');
        localStorage.setItem('changed', 'true');
        return this.router.navigate(['/krn'])
      },
    )
  }
}
