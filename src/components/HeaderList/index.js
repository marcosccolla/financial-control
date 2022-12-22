import React from "react";
import { Box, BoxHead, BoxH, BoxTi, BoxT } from "./style";

export const HeaderList = () => {
  return (
    <Box>
      <BoxHead>Descrição</BoxHead>
      <BoxH>Valor</BoxH>
      <BoxTi>Tipo</BoxTi>
      <BoxT></BoxT>
    </Box>
  );
};
