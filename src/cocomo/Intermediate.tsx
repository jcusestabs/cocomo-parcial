import React, { useState, useMemo } from "react";
import { ratingFactor, costDrivers } from "./interface";
import { calculateIntermediateCocomo } from "./scripts";
import { RadioGroup } from "@/components/RadioGroup";
import styled from "styled-components";

const InitialValue: ratingFactor = {
  reliability: 3,
  sizeOfDatabase: 3,
  Complexity: 3,
  performanceConstraints: 3,
  memoryConstraints: 3,
  environmentVolatility: 3,
  turnaboutTime: 3,

  analystCapability: 3,
  applicationsExperience: 3,
  programmerCapability: 3,
  virtualMachineExperience: 3,
  languageExperience: 3,

  applicationMethods: 3,
  softwareTools: 3,
  requiredSchedule: 3,
};

const driversKeys = [
  { key: "reliability", text: "Fiabilidad del software" },
  { key: "sizeOfDatabase", text: "Tamaño de la base de datos" },
  { key: "Complexity", text: "Complejidad del producto" },
  { key: "performanceConstraints", text: "Requisitos de rendimiento" },
  { key: "memoryConstraints", text: "Limitaciones de memoria" },
  { key: "environmentVolatility", text: "Volatilidad del entorno" },
  { key: "turnaboutTime", text: "Tiempo de recuperación" },
  { key: "analystCapability", text: "Capacidad del analista" },
  { key: "applicationsExperience", text: "Experiencia en aplicaciones" },
  { key: "programmerCapability", text: "Capacidad del programador" },
  {
    key: "virtualMachineExperience",
    text: "Experiencia en máquinas virtuales",
  },
  { key: "languageExperience", text: "Experiencia en lenguajes" },
  { key: "applicationMethods", text: "Métodos de aplicación" },
  { key: "softwareTools", text: "Herramientas de software" },
  { key: "requiredSchedule", text: "Cronograma requerido" },
];

interface IntermediateCocomoProps {
  team: "organic" | "semidetach" | "embedded";
  KLoC: number;
}
export const IntermediateCocomo: React.FC<IntermediateCocomoProps> = ({
  team,
  KLoC,
}) => {
  const [drivers, setDrivers] = useState(InitialValue);

  const handleUpdate = (driver: string, newValue: number) =>
    setDrivers({ ...drivers, [driver]: newValue });

  const res = useMemo(
    () => calculateIntermediateCocomo(team, KLoC, drivers),
    [drivers, team, KLoC]
  );

  return (
    <>
      <Res>
        <h3>{Round(res)}</h3>
        <div className="label">Esfuerzo en persona-meses</div>
      </Res>

      <hr />

      <Columns>
        <div>Muy bajo</div>
        <div>Bajo</div>
        <div>Medio</div>
        <div>Alto</div>
        <div>Muy alto</div>
        <div>Crítico</div>
      </Columns>

      <Grid>
        {driversKeys.map(({ key, text }) => (
          <RadioGroup
            title={text}
            selectRadio={handleUpdate}
            value={
              (
                drivers as unknown as {
                  [key: string]: 0 | 1 | 2 | 3 | 4 | 5 | 6;
                }
              )[key]
            }
            radioValues={(costDrivers as any)[key]}
            group={key}
            key={key}
          />
        ))}
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-gap: 8px;
  @media (min-width: 920px) {
    grid-template-columns: 120px 1fr;
  }
`;

const Res = styled.header`
  text-align: center;
  margin: 2em;
  & h3 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 28px;
    line-height: 1.35;
  }
  & .label {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
  }
`;

const Columns = styled.div`
  background-color: white;
  border-bottom: 1px solid #e8e8e8;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  overflow: hidden;
  position: sticky;
  top: 0;
  padding: 1em 0;
  z-index: 1;

  @media (min-width: 920px) {
    padding-left: 120px;
  }

  & div {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 32px;
  }
`;
const Round = (value: number) => (value == 0 ? 0 : Number(value).toFixed(2));
