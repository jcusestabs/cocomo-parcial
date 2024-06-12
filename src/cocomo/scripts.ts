import {
  modeCoefficients,
  Organic,
  Semidetach,
  Embedded,
  costDrivers,
} from "./interface";
import { ratingFactor } from "./interface";

export const personMonths = ({ ab, bb }: modeCoefficients, KLoC: number) =>
  ab * KLoC ** bb;

export const months = (coefficients: modeCoefficients, KLoC: number) =>
  coefficients.cb * personMonths(coefficients, KLoC) ** coefficients.db;

export const persons = (team: modeCoefficients, KLoC: number) =>
  !KLoC ? 0 : personMonths(team, KLoC) / months(team, KLoC);

export const calculateBasicCocomo = (
  team: "organic" | "semidetach" | "embedded",
  KLoC: number
) => {
  const coefficients = getMode(team);
  return {
    personMonths: personMonths(coefficients, KLoC),
    months: months(coefficients, KLoC),
    persons: persons(coefficients, KLoC),
  };
};

const getMode = (team: "organic" | "semidetach" | "embedded") => {
  if (team === "organic") return Organic;
  if (team === "semidetach") return Semidetach;
  if (team === "embedded") return Embedded;
  throw new Error(
    `Переданный режим '${team}' не соответсвует одному из трёх базовых типов!`
  );
};

export const calculateIntermediateCocomo = (
  team: "organic" | "semidetach" | "embedded",
  KLoC: number,
  drivers: ratingFactor
) => {
  const { ai, bi } = getMode(team);
  const values = Object.entries(drivers).map(([key, value]) => {
    const values = (costDrivers as { [item: string]: number[] })[key as string];
    return values[value - 1];
  });

  const RFT: number = values.reduce(Multiply, 1);

  return ai * KLoC ** bi * RFT;
};

const Multiply = (total: number, value: number) => (value ? total * value : 0);
