import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountsService} from "../../../services/accounts.service";
import {Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormValidator} from "../../../form-validator/formValidator";
import {Account, Client, objValues} from "../../../shared/user.interface";

@Component({
  selector: 'app-pmd',
  templateUrl: './pmd.component.html',
  styleUrls: ['./pmd.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PmdComponent implements OnInit {

  form!: FormGroup;
  user!: Client;
  clientKey: any;
  accounts: Account[] = [];
  allAccounts: Account[] = [];
  select = 'აირჩიე';

  constructor(
    private accountService: AccountsService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      'sender': ['', [FormValidator.required]],
      'receiver': ['', [FormValidator.required]],
      'amount': ['', [FormValidator.required]]
    })
  }

  errors(controlName: string) {
    if (this.get(controlName)?.touched && this.get(controlName)?.invalid) {
      let err: any = this.get(controlName)?.errors;
      return Object.values(err);
    }
    return null;
  }

  get(controlName: string) {
    return this.form.get(controlName);
  }


  ngOnInit(): void {
    this.clientKey = JSON.parse(localStorage.getItem('clientKey') || '');
    this.user = JSON.parse(localStorage.getItem('client') || '');
    this.accountService.getAccounts(this.clientKey).subscribe(
      (res: any) => this.accounts = res,
    );
    this.accountService.getAllAccounts().subscribe(
      (res: any) => {
        this.allAccounts = res;
      }
    )
  }

  transfer() {
    const controls = this.form.controls;
    const [senderKey, receiverKey, amount] = objValues<number>(controls);
    if (this.form.valid)
    this.accountService.transferAmount(senderKey, receiverKey, amount)
      .pipe(
        switchMap(_ => this.accountService.getUsers(this.user.firstName, this.user.lastName, this.user.clientKey)),
      ).subscribe(
      user => {
        localStorage.removeItem('client');
        localStorage.setItem('client', JSON.stringify(user[0]));
        localStorage.removeItem('changed');
        localStorage.setItem('changed', 'true');
        return this.router.navigate(['/krn']);
      }
    )
  }

}
