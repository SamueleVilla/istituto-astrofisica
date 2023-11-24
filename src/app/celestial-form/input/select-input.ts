import { BaseInput } from "./base-input";

export class SelectInput extends BaseInput<string> {
  override controlType = "select";
}
