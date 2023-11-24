import { BaseInput } from "./base-input";

export class TextboxInput extends BaseInput<string> {
  override controlType = "textbox";
}
