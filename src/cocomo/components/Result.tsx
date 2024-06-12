import React from "react";
import styled from "styled-components";
import { calculateBasicCocomo } from "../scripts";
import { ResultColumn } from "./ResultColumn";
// import { calculateBasicCocomo, ResultColumn } from "";

export const Grid = styled.div`
  display: grid;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    & > :not(:last-child) {
      border-right: 1px solid var(--input-placeholder, #ced6e0);
    }
  }

  @media (max-width: 599px) {
    margin: -20px 0;
    & > :not(:last-child) {
      border-bottom: 1px solid var(--input-placeholder, #ced6e0);
    }
  }
`;

interface ResultProps {
  team: "organic" | "semidetach" | "embedded";
  KLoC: number;
}
export const Result: React.FC<ResultProps> = ({ team, KLoC }) => {
  const { personMonths, months, persons } = calculateBasicCocomo(team, KLoC);
  return (
    <Grid>
      <ResultColumn title={Round(personMonths)} label="Esfuerzo" />
      <ResultColumn title={Round(months)} label="Duracion (Meses)" />
      <ResultColumn title={Round(persons)} label="Personal" />
    </Grid>
  );
};

const Round = (value: number) => (!value ? 0 : Number(value).toFixed(2));
