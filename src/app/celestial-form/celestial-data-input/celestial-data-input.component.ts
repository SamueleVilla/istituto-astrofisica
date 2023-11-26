import { Component, Input } from "@angular/core";
import { BaseInput } from "../input/base-input";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-celestial-data-input",
  templateUrl: "./celestial-data-input.component.html",
  styleUrls: ["./celestial-data-input.component.scss"]
})
export class CelestialDataInputComponent {

  @Input() form!: FormGroup;
  @Input() input!: BaseInput<string>;

  get isValid(): boolean {
    return this.form.get(this.input.key).valid && ((this.form.get(this.input.key).dirty || this.form.get(this.input.key).touched));
  }

  get isInvalid(): boolean {
    return this.form.get(this.input.key).invalid && this.form.get(this.input.key).errors && ((this.form.get(this.input.key).dirty || this.form.get(this.input.key).touched));
  }

  get isRequired(): boolean {
    return this.form.get(this.input.key).hasError("required");
  }

  onChange(value: string, formControlName: string) {
    this.form.get(formControlName).setValue(value);
  }
}
