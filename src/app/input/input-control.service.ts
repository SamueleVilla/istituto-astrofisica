import {Injectable} from '@angular/core';
import {InputBase} from "./input-base";
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class InputControlService {

  constructor() {
  }

  toFormGroup(inputs: InputBase<string>[]) {
    const group: {
      [key: string]: FormControl
    } = {}

    const getValidators = (input: InputBase<string>) => {
      const validators: ValidatorFn[] = [];

      if (input.required) {
        validators.push(Validators.required);
      }

      if (input.min) {
        validators.push(Validators.min(input.min))
      }

      if (input.max) {
        validators.push(Validators.max(input.max))
      }

      return validators;
    }

    inputs.forEach(input => {
      group[input.key] = new FormControl(input.value || '',
        getValidators(input))
    })

    return new FormGroup(group);
  }
}
