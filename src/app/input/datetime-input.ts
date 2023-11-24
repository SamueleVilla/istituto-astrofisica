import { InputBase } from "./input-base";

export class DatetimeInput extends InputBase<string> {
  override controlType = "datetime";
}
