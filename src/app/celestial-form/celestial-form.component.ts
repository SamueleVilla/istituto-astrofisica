import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CelestialService } from "./celestial.service";
import { InputBase } from "../input/input-base";
import { InputControlService } from "../input/input-control.service";
import { CelestialOption, CelestialType } from "../types/celestial.interface";

@Component({
  selector: "app-celestial-form",
  templateUrl: "./celestial-form.component.html",
  styleUrls: ["./celestial-form.component.scss"]
})
export class CelestialFormComponent implements OnInit {

  celestialForm: FormGroup;
  celestialDataInputsForm: FormGroup;
  celestialOptions: CelestialOption[] | null;
  celestialInputs: InputBase<string>[];

  constructor(private cs: CelestialService, private ics: InputControlService) {

  }

  ngOnInit(): void {
    this.celestialOptions = this.cs.getCelestialOptions();

    this.celestialForm = new FormGroup({
      "celestialType": new FormControl("", Validators.required)
    });
  }


  onSelectionChange() {
    const type = this.celestialForm.get("celestialType").value as CelestialType;
    this.celestialInputs = this.cs.getCelestialInputs(type);
    this.celestialDataInputsForm = this.ics.toFormGroup(this.celestialInputs);
    this.celestialForm.addControl("celestialDataInputs", this.celestialDataInputsForm);
  };

  onSubmit(): void {
    console.log(
      {
        ...this.celestialForm.getRawValue()
      }
    );
  }


}
