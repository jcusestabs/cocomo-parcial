export interface modeCoefficients {
  ab: number;
  bb: number;
  cb: number;
  db: number;
  ai: number;
  bi: number;
}

export const Organic: modeCoefficients = {
  ab: 2.4,
  bb: 1.05,
  cb: 2.5,
  db: 0.38,
  ai: 3.2,
  bi: 1.05,
};

export const Semidetach: modeCoefficients = {
  ab: 3,
  bb: 1.12,
  cb: 2.5,
  db: 0.35,
  ai: 3,
  bi: 1.12,
};

export const Embedded: modeCoefficients = {
  ab: 3.6,
  bb: 1.2,
  cb: 2.5,
  db: 0.32,
  ai: 2.8,
  bi: 1.2,
};

// prettier-ignore-start
type oneSixrating = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type oneFiveRating = 0 | 1 | 2 | 3 | 4 | 5;
type oneFourRating = 0 | 1 | 2 | 3 | 4;
type twoFiveRating = 2 | 3 | 4 | 5;
type threeSixRating = 3 | 4 | 5 | 6;

export interface ratingFactor {
  reliability: oneFiveRating;
  sizeOfDatabase: twoFiveRating;
  Complexity: oneSixrating;

  performanceConstraints: threeSixRating;
  memoryConstraints: threeSixRating;
  environmentVolatility: twoFiveRating;
  turnaboutTime: twoFiveRating;

  analystCapability: oneFiveRating;
  applicationsExperience: oneFiveRating;
  programmerCapability: oneFiveRating;
  virtualMachineExperience: oneFourRating;
  languageExperience: oneFourRating;

  applicationMethods: oneFiveRating;
  softwareTools: oneFiveRating;
  requiredSchedule: oneFiveRating;
}

export const costDrivers = {
  reliability: [0.75, 0.88, 1, 1.15, 1.4, null],
  sizeOfDatabase: [null, 0.94, 1, 1.08, 1.16, null],
  Complexity: [0.7, 0.85, 1, 1.15, 1.3, 1.65],

  performanceConstraints: [null, null, 1, 1.11, 1.3, 1.66],
  memoryConstraints: [null, null, 1, 1.06, 1.21, 1.56],
  environmentVolatility: [null, 0.87, 1, 1.15, 1.3, null],
  turnaboutTime: [null, 0.87, 1, 1.07, 1.15, null],

  analystCapability: [1.46, 1.19, 1, 0.86, 0.71, null],
  applicationsExperience: [1.29, 1.13, 1, 0.91, 0.82, null],
  programmerCapability: [1.42, 1.17, 1, 0.86, 0.7, null],
  virtualMachineExperience: [1.21, 1.1, 1, 0.9, null, null],
  languageExperience: [1.14, 1.07, 1, 0.95, null, null],

  applicationMethods: [1.24, 1.1, 1, 0.91, 0.82, null],
  softwareTools: [1.24, 1.1, 1, 0.91, 0.83, null],
  requiredSchedule: [1.23, 1.08, 1, 1.04, 1.1, null],
};
