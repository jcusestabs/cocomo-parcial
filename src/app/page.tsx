"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Collapse, InputNumber, Select } from "antd";
// import { IntermediateCocomo, CoefficientTable, Result } from "cocomo";
import { IntermediateCocomo } from "@/cocomo/Intermediate";
import { CoefficientTable } from "@/cocomo/components/Table";
import { Result } from "@/cocomo/components/Result";

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 920px;
`;

const HideBar = styled(Collapse)`
  &:focus-within {
    box-shadow: 0 0 0 2px rgba(39, 94, 254, 0.3);
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 599px) {
    flex-direction: column;
    & label {
      align-items: center;
      display: grid;
      text-align: center;
      justify-content: center;
    }
  }
`;

const { Panel } = Collapse;
const { Option } = Select;

type Team = "organic" | "semidetach" | "embedded";
const Cocomo = () => {
  document.title = "Calculadora COCOMO";

  const [team, setTeam] = useState<Team>("organic");
  const [KLoC, setKLoC] = useState(0);
  const handleSelect = (newValue: Team) => setTeam(newValue);

  return (
    <>
      <Wrapper>
        <InputContainer>
          <label>
            Tipo de equipo:
            <Select
              style={{ margin: "12px", width: "140px" }}
              value={team}
              onChange={handleSelect}
              size="large"
            >
              <Option value="organic">Organico</Option>
              <Option value="semidetach">Semiempotrado</Option>
              <Option value="embedded">Separado</Option>
            </Select>
          </label>
          <label>
            y necesitamos escribir
            <InputNumber
              value={KLoC}
              onChange={(num) => setKLoC(Number(num))}
              style={{ margin: "12px", width: "140px" }}
              size="large"
            />
            mil líneas de código
          </label>
        </InputContainer>
        <hr />
        <Result team={team} KLoC={KLoC} />
        <hr />
        <HideBar>
          <Panel header="Tabla de coeficientes" key="1">
            <CoefficientTable />
          </Panel>
        </HideBar>
        <hr />
        <IntermediateCocomo team={team} KLoC={KLoC} />{" "}
        <div className="w-full h-10 flex flex-col gap-5">
          <div className="text-3xl">COCOMO</div>
          <div className="text-lg">
            COCOMO (Constructive Cost Model) es un modelo de estimación de
            costos de software desarrollado por Barry W. Boehm. COCOMO estima el
            esfuerzo de desarrollo del software basado en el tamaño del software
            en líneas de código fuente. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eaque cum corporis voluptatibus minus tempora
            doloribus praesentium? Hic facilis, dolorum aut inventore ducimus
            blanditiis commodi perspiciatis excepturi praesentium explicabo
            labore velit.
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl">Integrantes</h1>

            <h1>Jose Carlos Ramirez Peralta</h1>
            <h1>Kelvin Edenilson Rojas Chilin</h1>
            <h1>Rodrigo Vladimir Gomez Aguilar</h1>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Cocomo;
