import { Injectable } from "@angular/core";
import { BaseInput } from "../input/base-input";
import { FormBuilder, FormControl, ValidatorFn, Validators } from "@angular/forms";
import { NumericTextboxInput } from "../input/numeric-textbox-input";

@Injectable({
  providedIn: "root"
})
export class InputControlService {

  constructor(private fb: FormBuilder) {
  }

  toFormGroup(inputs: BaseInput<string>[]) {
    const group = this.fb.group({});

    const getValidators = (input: BaseInput<string>) => {
      const validators: ValidatorFn[] = [];

      if (input.required) {
        validators.push(Validators.required);
      }

      if (input instanceof NumericTextboxInput) {
        validators.push(Validators.min(input.min), Validators.max(input.max), Validators.pattern(input.numberRegex));
      }

      return validators;
    };

    inputs.forEach(input => {
      group.addControl(input.key, new FormControl(input.value || "", getValidators(input)));
    });

    return group;
  }
}
