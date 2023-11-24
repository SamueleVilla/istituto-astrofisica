import { Injectable } from "@angular/core";
import { BaseInput } from "../input/base-input";
import { TextboxInput } from "../input/textbox-input";
import { SelectInput } from "../input/select-input";
import { CheckBoxInput } from "../input/check-box-input";
import { DatetimeInput } from "../input/datetime-input";
import { CelestialOption, CelestialType } from "../types/celestial.interface";

@Injectable({
  providedIn: "root"
})
export class CelestialService {

  private allCelestialInputs: BaseInput<string>[] = [
    new DatetimeInput({
      key: "datetime",
      label: "Data avvistamento",
      order: 1,
      required: true
    }),
    new TextboxInput({
        key: "hourAngle",
        type: "number",
        label: "Angolo Orario",
        order: 2,
        min: 0,
        max: 360,
        required: true
      }
    ),
    new TextboxInput({
        key: "declination",
        type: "number",
        label: "Declinazione",
        order: 3,
        min: -90,
        max: 90,
        required: false
      }
    ),
    new TextboxInput({
        key: "temperature",
        type: "number",
        label: "Temperatura",
        order: 4,
        min: 0,
        max: 300_000,
        required: false
      }
    ),
    new TextboxInput({
        key: "mass",
        type: "number",
        label: "Massa",
        order: 5,
        min: 1,
        max: 100,
        required: false
      }
    ),
    new TextboxInput({
        key: "radius",
        type: "number",
        label: "Raggio",
        order: 6,
        min: 1,
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
    new TextboxInput({
      key: "orbitalInclination",
      type: "number",
      label: "Inclinazione Orbitale",
      min: 0,
      max: 180,
      order: 8,
      required: false
    }),
    new TextboxInput({
      key: "albedo",
      type: "number",
      label: "Albedo",
      min: 0,
      max: 100,
      order: 9,
      required: false
    }),
    new TextboxInput({
      key: "distance",
      type: "number",
      label: "Distanza",
      min: 1,
      max: 5_881_413_000_000_000,
      order: 10,
      required: true
    }),
    new CheckBoxInput({
      key: "solarSystem",
      label: "Sistema solare",
      order: 11,
      required: false
    })
  ];

  private getInputByKeys(keys: string[]): BaseInput<string>[] {
    const inputs: BaseInput<string>[] = [];
    keys.forEach(key => {
      inputs.push(this.allCelestialInputs.find(input => input.key === key));
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
      "UFO": this.getInputByKeys(["datetime",
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
