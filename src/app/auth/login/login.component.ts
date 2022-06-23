import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AccountsService} from "../../services/accounts.service";
import {FormValidator} from "../../form-validator/formValidator";
import {objValues} from "../../shared/user.interface";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private accountService: AccountsService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      'name': ['', [FormValidator.required, FormValidator.minLength(2), FormValidator.maxLength(30)]],
      'password': ['', [FormValidator.required, FormValidator.minLength(6), FormValidator.maxLength(30)]],

    },);
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

  login() {
    let controls = this.form.controls;
    const [userName, password] = objValues<string>(controls);
    if (this.form.valid)
      this.authService.login(userName, password).subscribe(user => {
        localStorage.clear();
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', JSON.stringify(user));
        return this.router.navigate(['bpm']);
      })
  }


}
