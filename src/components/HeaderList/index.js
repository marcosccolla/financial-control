import React from "react";
import {
  MdDeleteForever,
  MdArrowCircleDown,
  MdArrowCircleUp,
} from "react-icons/md";
import { Table, Th, Td } from "./style";

export const HeaderList = ({ dataSales, onDelete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th width={40}>Descrição</Th>
          <Th width={40}>Valor</Th>
          <Th width={10}>Tipo</Th>
          <Th width={10}></Th>
        </tr>
      </thead>
      <tbody>
        {dataSales?.map((dataSales, index) => (
          <tr key={index}>
            <Td>{dataSales.descricao} </Td>
            <Td>R${Math.abs(dataSales.valor).toFixed(2)} </Td>
            <Td>
              {dataSales.tipo === 1 ? (
                <MdArrowCircleDown color="red" />
              ) : (
                <MdArrowCircleUp color="green" />
              )}
            </Td>
            <Td>
              <MdDeleteForever onDelete={onDelete} />
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
