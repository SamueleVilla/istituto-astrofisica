export type CelestialType = "PLANET" | "STAR" | "ASTEROID" | "METEOR" | "UFO";

export interface CelestialOption {
  type: CelestialType,
  label: string
}
