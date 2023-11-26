import { Injectable } from "@angular/core";
import { BaseInput } from "../input/base-input";
import { SelectInput } from "../input/select-input";
import { RadioInput } from "../input/radio-input";
import { CelestialOption, CelestialType } from "../types/celestial.interface";
import { NumericTextboxInput } from "../input/numeric-textbox-input";
import { TextboxInput } from "../input/textbox-input";

@Injectable({
  providedIn: "root"
})
export class CelestialService {

  private availableCelestialInputs: BaseInput<string>[] = [
    new TextboxInput({
      key: "datetime",
      type: "datetime-local",
      label: "Data avvistamento",
      order: 1,
      required: true
    }),
    new NumericTextboxInput({
        key: "hourAngle",
        label: "Angolo Orario",
        unit: "(°)",
        order: 2,
        max: 360,
        required: true
      }
    ),
    new NumericTextboxInput({
        key: "declination",
        label: "Declinazione",
        unit: "(°)",
        order: 3,
        min: -90,
        max: 90,
        required: false
      }
    ),
    new NumericTextboxInput({
        key: "temperature",
        label: "Temperatura",
        unit: "(K)",
        order: 4,
        max: 300_000,
        required: false
      }
    ),
    new NumericTextboxInput({
        key: "mass",
        type: "number",
        label: "Massa",
        unit: "(M⊙)",
        order: 5,
        min: 1,
        max: 100,
        required: false
      }
    ),
    new NumericTextboxInput({
        key: "radius",
        label: "Raggio",
        unit: "(R⊙)",
        order: 6,
        max: 100,
        required: false
      }
    ),
    new SelectInput({
        key: "harvardClass",
        label: "Classe Harvard",
        options: [
          { key: "O", value: "O" },
          { key: "B", value: "B" },
          { key: "F", value: "F" },
          { key: "G", value: "G" },
          { key: "K", value: "K" },
          { key: "M", value: "M" }
        ],
        order: 7,
        required: true
      }
    ),
    new NumericTextboxInput({
      key: "orbitalInclination",
      label: "Inclinazione Orbitale",
      max: 180,
      order: 8,
      required: false
    }),
    new NumericTextboxInput({
      key: "albedo",
      label: "Albedo",
      unit: "(%)",
      max: 100,
      order: 9,
      required: false
    }),
    new NumericTextboxInput({
      key: "distance",
      label: "Distanza",
      unit: "(UA)",
      min: 1,
      max: 5_881_413_000_000_000,
      order: 10,
      required: true
    }),
    new RadioInput({
      key: "solarSystem",
      label: "Sistema solare",
      order: 11,
      required: false
    })
  ];

  private getInputByKeys(keys: string[]): BaseInput<string>[] {
    const inputs: BaseInput<string>[] = [];
    keys.forEach(key => {
      inputs.push(this.availableCelestialInputs.find(input => input.key === key));
    });

    return inputs.sort((a, b) => a.order - b.order);
  }

  getCelestialInputs(celestialType: CelestialType) {
    const celestialDataInputs: { [key: string]: BaseInput<string>[] } = {
      "PLANET": this.getInputByKeys([
        "datetime",
        "hourAngle",
        "declination",
        "temperature",
        "mass",
        "radius",
        "orbitalInclination",
        "albedo",
        "distance",
        "solarSystem"]),
      "STAR": this.getInputByKeys([
        "datetime",
        "hourAngle",
        "declination",
        "temperature",
        "mass",
        "radius",
        "harvardClass",
        "distance",
        "solarSystem"]),
      "ASTEROID": this.getInputByKeys([
        "datetime",
        "hourAngle",
        "declination",
        "temperature",
        "mass", "radius",
        "albedo",
        "distance",
        "solarSystem"]),
      "METEOR": this.getInputByKeys([
        "datetime",
        "hourAngle",
        "declination",
        "mass",
        "radius"]),
      "UFO": this.getInputByKeys([
        "datetime",
        "hourAngle",
        "declination"
      ])
    };

    return celestialDataInputs[celestialType];
  }

  getCelestialOptions(): CelestialOption[] {
    return [
      { type: "PLANET", label: "Pianeta" },
      { type: "STAR", label: "Stella" },
      { type: "ASTEROID", label: "Asteroide" },
      { type: "METEOR", label: "Meteora" },
      { type: "UFO", label: "U.F.O." }
    ];
  }
}
