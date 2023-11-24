export const celestialsBodies = [
  {
    id: 1,
    type: "PLANET",
    label: "Pianeta",
    dataInputs: ["datetime", "hourAngle", "declination", "temperature", "mass", "radius", "orbitalInclination", "albedo", "distance", "solarSystem"]
  },
  {
    id: 1,
    type: "STAR",
    label: "Stella",
    dataInputs: ["datetime", "hourAngle", "declination", "temperature", "mass", "radius", "harvardClass", "distance", "solarSystem"]
  },
  {
    id: 3,
    type: "ASTEROID",
    label: "Asteroide",
    dataInputs: ["datetime", "hourAngle", "declination", "temperature", "mass", "radius", "albedo", "distance", "solarSystem"]
  },
  {
    id: 4,
    type: "METEOR",
    label: "Meteora",
    dataInputs: ["datetime", "hourAngle", "declination", "mass", "radius"]
  },
  {
    id: 5,
    type: "UFO",
    label: "U.F.O.",
    dataInputs: ["datetime", "hourAngle", "declination"]
  }
] as const;
