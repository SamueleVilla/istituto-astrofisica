import { BaseInput } from "./base-input";

export class DatetimeInput extends BaseInput<string> {
  override controlType = "datetime";
}
