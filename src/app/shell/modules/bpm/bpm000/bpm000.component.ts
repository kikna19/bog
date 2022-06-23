import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import {AccountsService} from "../../../../services/accounts.service";
import {LoaderService} from "../../../../services/loader.service";
import {Router} from "@angular/router";
import {assertType, Client} from "../../../../shared/user.interface";



@Component({
  selector: 'app-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Bpm000Component {

  firstName: string = '';
  lastName: string = '';
  key: string = '';
  clients$!: Observable<Client[]>;
  clientHeader: string[] = ['name', 'surname', 'key'];
  type = (el:any) => assertType<Client>(el);

  constructor(
    private accountService: AccountsService,
    public loadService: LoaderService,
    private router: Router
  ) {
  }

  search(): void {
    this.clients$ = this.accountService.getUsers(this.firstName, this.lastName, this.key).pipe(
      this.loadService.useLoading,
    );
    this.firstName = '';
    this.lastName = '';
    this.key = '';
  }

  saveUser(user: Client) {
    localStorage.removeItem('client');
    localStorage.setItem('client', JSON.stringify(user));
    return this.router.navigate(['krn']);
  }

}
