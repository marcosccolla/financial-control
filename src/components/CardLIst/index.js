import React from "react";
import { Resume } from "../Resume";

import {
  AiFillCaretUp,
  AiFillCaretDown,
  AiFillDollarCircle,
} from "react-icons/ai";

const Data = [
  {
    title: "Entrada",
    icon: <AiFillCaretUp />,
    value: "R$0.00",
  },
  {
    title: "Saidas",
    icon: <AiFillCaretDown />,
    value: "R$0.00",
  },
  {
    title: "Total",
    icon: <AiFillDollarCircle />,
    value: "R$0.00",
  },
];

export const CardList = () => {
  return (
    <>
      {Data.map((item) => (
        <Resume
          key={item.title}
          title={item.title}
          icon={item.icon}
          value={item.value}
        />
      ))}
    </>
  );
};
