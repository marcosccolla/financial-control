import React from "react";
import { Resume } from "../Resume";
import { MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";

export const CardList = ({ saldo, entrada, saida }) => {
  return (
    <>
      <Resume
        title="Entrada "
        icon={<MdArrowCircleUp color="green" />}
        value={entrada}
      />
      <Resume
        title="Saída"
        icon={<MdArrowCircleDown color="red" />}
        value={saida}
      />
      <Resume
        title="Saldo"
        icon={<HiCurrencyDollar color="#3a4bb4" />}
        value={saldo}
      />
    </>
  );
};
