import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CelestialService } from "./services/celestial.service";
import { BaseInput } from "./input/base-input";
import { InputControlService } from "./services/input-control.service";
import { CelestialOption, CelestialType } from "./types/celestial.interface";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CelestialModalContentComponent } from "./celestial-modal-content/celestial-modal-content.component";

@Component({
  selector: "app-celestial-form",
  templateUrl: "./celestial-form.component.html",
  styleUrls: ["./celestial-form.component.scss"]
})
export class CelestialFormComponent implements OnInit {

  celestialForm: FormGroup;
  celestialDataGroup: FormGroup;
  celestialOptions: CelestialOption[] | null;
  celestialInputs: BaseInput<string>[];

  constructor(private fb: FormBuilder, private cs: CelestialService, private ics: InputControlService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.celestialOptions = this.cs.getCelestialOptions();

    this.celestialForm = this.fb.group({
      "celestialType": ["", Validators.required]
    });
  }


  onSelectionChange() {
    const type = this.celestialForm.get("celestialType").value as CelestialType;
    this.celestialInputs = this.cs.getCelestialInputs(type);
    this.celestialDataGroup = this.ics.toFormGroup(this.celestialInputs);

    // override form group
    this.celestialForm.removeControl("celestialData");
    this.celestialForm.addControl("celestialData", this.celestialDataGroup);
  };

  onSubmit(): void {
    let payload = this.celestialForm.getRawValue();

    // check if distance is correct
    // TODO: fix this! that's horrible :(
    if (payload?.celestialData?.distance && +payload?.celestialData?.distance > 130) {
      payload = {
        ...payload,
        solarSystem: "no"
      };
    }

    // open modal
    const modalRef = this.modalService.open(CelestialModalContentComponent, {
      backdrop: "static"
    });
    modalRef.componentInstance.payload = payload;

    this.onReset();
  }

  onReset(): void {
    this.celestialForm.reset();
  }

  get isFormValid(): boolean {
    return this.celestialForm.valid;
  }

}
