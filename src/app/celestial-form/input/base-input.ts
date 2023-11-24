export class BaseInput<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  max?: number | null;
  min?: number | null;
  order: number;
  controlType: string;
  type: string;
  options: { key: string, value: string }[];

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    max?: number;
    min?: number;
    order?: number;
    controlType?: string;
    type?: string;
    options?: { key: string, value: string }[];
  } = {}) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.max = options.max || null;
    this.min = options.min || null;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.options = options.options || [];
  }
}