import { TextboxInput } from "./textbox-input";

export class NumericTextboxInput extends TextboxInput {
  override type = "number";
  min: number;
  max: number;
  numberRegex = "^-?[0-9]+(\\.[0-9]+)?$";

  constructor(options: {
    value?: string;
    key?: string;
    label?: string;
    unit?: string;
    required?: boolean;
    min?: number,
    max?: number,
    order?: number;
    controlType?: string;
    type?: string;
    options?: { key: string, value: string }[];
  } = {}) {
    super(options);
    this.min = options.min || 0;
    this.max = options.max || 0;

  }

}
