import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export class FormValidator extends Validators {

  static required(control: AbstractControl): ValidationErrors | null {
    return super.required(control) ? {req: 'აუცილებელი ველი'} : null;
  }

  static minLength(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>
      super.minLength(length)(control) ? {min: `მინიმუმალური სიგრძე ${length}`} : null
  }

  static maxLength(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>
      super.maxLength(length)(control) ? {max: `მაქსიმალური სიგრძე ${length}`} : null;

  }

  static passwordNoMatch: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    if (group.get('password')?.value === group.get('passwordConfirm')?.value)
      return null;
    else return {passwordNoMatch: true}
  }

}
