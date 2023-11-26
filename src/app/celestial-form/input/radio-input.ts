import { BaseInput } from "./base-input";

export class RadioInput extends BaseInput<string> {
  override controlType = "radioGroup";
  override type = "radio";
}
