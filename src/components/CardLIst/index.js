import React from "react";
import { Resume } from "../Resume";

// import {
//   AiFillCaretUp,
//   AiFillCaretDown,
//   AiFillDollarCircle,
// } from "react-icons/ai";

export const CardList = ({ saldo, entrada, saida }) => {
  return (
    <>
      {/* {Data.map((item) => ( */}
      <Resume
        title="Entrada "
        // icon="AiFillCaretDown/>
        value={entrada}
      />
      <Resume
        title="Saída"
        // icon={item.icon}
        value={saida}
      />
      <Resume
        title="Saldo"
        // icon={item.icon}
        value={saldo}
      />
      {/* ))} */}
    </>
  );
};
