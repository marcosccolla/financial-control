import React from "react";
import { Box, BoxHead, BoxH, BoxTi, BoxT } from "./style";
// import { Statement } from "../Statement/index";
// import { Statement } from "./../Statement/index";

export const HeaderList = () => {
  // const newStatement = (statement) => {
  //   console.log(statement);
  // };
  return (
    <Box>
      <BoxHead>Descrição</BoxHead>
      <BoxH>Valor</BoxH>
      <BoxTi>Tipo</BoxTi>
      <BoxT></BoxT>
      {/* <AddMovement addStatement={(statement) => newStatement(statement)} /> */}
      {/* <Statement addStatement={(statement) => newStatement(statement)} /> */}
    </Box>
  );
};
