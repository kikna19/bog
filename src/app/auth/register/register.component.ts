import {Component,ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, } from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormValidator} from "../../form-validator/formValidator";
import {objValues} from "../../shared/user.interface";

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router
  ) {
    this.form = this.fb.group({
      'name': ['', [FormValidator.required, FormValidator.minLength(2), FormValidator.maxLength(30)]],
      'username': ['', [FormValidator.required, FormValidator.minLength(2), FormValidator.maxLength(30)]],
      'password': ['', [FormValidator.required, FormValidator.minLength(6), FormValidator.maxLength(30)]],
      'passwordConfirm': ['', [FormValidator.required]],
    }, {validators: FormValidator.passwordNoMatch});

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

  checkPasswords() {
    if (this.form.hasError('passwordNoMatch'))
      if (this.get('password')?.value && this.get('passwordConfirm')?.value)
        this.get('passwordConfirm')?.setErrors(['პაროლი არ ემთხვევა']);
  }


  register() {
    const controls = this.form.controls;
    const [name, userName, password] = objValues<string>(controls);
    if (this.form.valid)
      this.authService.register(name, userName, password).subscribe(user => {
        localStorage.clear();
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', JSON.stringify(user));
        return this.router.navigate(['bpm']);
      })
  }

}
