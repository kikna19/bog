import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountsService} from "../../../../../services/accounts.service";
import {Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormValidator} from "../../../../../form-validator/formValidator";
import {Client, objValues} from "../../../../../shared/user.interface";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  user!: Client;
  clientKey: any;

  constructor(
    private accountService: AccountsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      'name': ['', [FormValidator.required, FormValidator.minLength(2), FormValidator.maxLength(20)]],
      'amount': ['', [FormValidator.required, FormValidator.minLength(1), FormValidator.maxLength(20)]],
    });
  }


  get(controlName: string) {
    return this.form.get(controlName);
  }

  errors(controlName: string) {
    let err: any = this.get(controlName)?.errors;
    if (this.get(controlName)?.touched && this.get(controlName)?.invalid) {
      return Object.values(err);
    }
    return null;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('client') || '');
    this.clientKey = JSON.parse(localStorage.getItem('clientKey') || '');
  }

  createAccount() {
    const controls = this.form.controls;
    const [name, amount] = objValues<any>(controls)
    if (this.form.valid)
    this.accountService.createAccount(this.clientKey, name, amount).pipe(
      switchMap(_ => this.accountService.getUsers(this.user.firstName, this.user.lastName, this.user.clientKey)),
    ).subscribe(
      user => {
        localStorage.removeItem('client');
        localStorage.setItem('client', JSON.stringify(user[0]));
        localStorage.removeItem('changed');
        localStorage.setItem('changed', 'true');
        return this.router.navigate(['/krn'])
      }
    )
  }
}
