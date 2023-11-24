import { BaseInput } from "./base-input";

export class CheckBoxInput extends BaseInput<string> {
  override controlType = "checkbox";
}
