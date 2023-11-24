import { Component, Input } from "@angular/core";
import { InputBase } from "../../input/input-base";
import { FormGroup } from "@angular/forms";
import { immediateProvider } from "rxjs/internal/scheduler/immediateProvider";

@Component({
  selector: "app-celestial-data-input",
  templateUrl: "./celestial-data-input.component.html",
  styleUrls: ["./celestial-data-input.component.scss"]
})
export class CelestialDataInputComponent {

  @Input() form!: FormGroup;
  @Input() input!: InputBase<string>;

  get isValid(): boolean {
    return this.form.controls[this.input.key].valid;
  }

  protected readonly immediateProvider = immediateProvider;
}