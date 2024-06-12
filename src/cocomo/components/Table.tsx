import React from "react";
import { Table } from "antd";
// import { Organic, Semidetach, Embedded } from "cocomo";
import { Organic, Semidetach, Embedded } from "../interface";

const { Column } = Table;

export const CoefficientTable: React.FC = () => {
  const data = [
    {
      key: "Orgánico",
      type: "Orgánico",
      ab: Organic.ab,
      bb: Organic.bb,
      cb: Organic.cb,
      db: Organic.db,
    },
    {
      key: "Semiseparado",
      type: "Semiseparado",
      ab: Semidetach.ab,
      bb: Semidetach.bb,
      cb: Semidetach.cb,
      db: Semidetach.db,
    },
    {
      key: "Empotrado",
      type: "Empotrado",
      ab: Embedded.ab,
      bb: Embedded.bb,
      cb: Embedded.cb,
      db: Embedded.db,
    },
  ];

  return (
    <Table style={{ overflow: "auto" }} dataSource={data} pagination={false}>
      <Column title="Tipo de proyecto" dataIndex="type" key="type" />
      <Column title={<XB letter="a" />} dataIndex="ab" key="ab" />
      <Column title={<XB letter="b" />} dataIndex="bb" key="bb" />
      <Column title={<XB letter="c" />} dataIndex="cb" key="cb" />
      <Column title={<XB letter="d" />} dataIndex="db" key="db" />
    </Table>
  );
};

const XB = ({ letter }: { letter: string }) => (
  <>
    {letter}
    <sub>b</sub>
  </>
);
