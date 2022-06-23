import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedComponent implements OnInit {

  showError: boolean = true;

  constructor(
    public authService: AuthService,
    public accountService: AccountsService
  ) {
  }

  ngOnInit(): void {
  }


  close(): void{
    this.showError = false;
    this.authService.err = '';
    this.accountService.err = '';
  }

}
