import {Component, ViewEncapsulation} from '@angular/core';
import {AccountsService} from "../../../../services/accounts.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormValidator} from "../../../../form-validator/formValidator";
import {objValues} from "../../../../shared/user.interface";


@Component({
  selector: 'app-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Bpm001Component {
  form!: FormGroup;

  constructor(
    private accountService: AccountsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      'name': ['', [FormValidator.required, FormValidator.minLength(2), FormValidator.maxLength(30)]],
      'surname': ['', [FormValidator.required, FormValidator.minLength(2), FormValidator.maxLength(30)]],
      'points': [null, [FormValidator.required, FormValidator.maxLength(20)]]
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

  createClient() {
    const controls = this.form.controls;
    const [name, surName, points] = objValues<string>(controls);
    if (this.form.valid)
      this.accountService.createUser(name, surName, points)
        .subscribe(user => {
          if (user) {
            localStorage.removeItem('client');
            localStorage.setItem('client', JSON.stringify(user));
            this.router.navigate(['/krn'])
          }
        })
  }

}
