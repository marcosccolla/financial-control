import React from "react";
import { AddMovement } from "../../components/AddMovement";
import { CardList } from "../../components/CardLIst";
import { HeaderList } from "../../components/HeaderList";
import { Box, Titulo, Teste } from "./styles";

export const Home = () => {
  return (
    <Teste>
      <Titulo>Controle Financeiro</Titulo>
      <Box>
        <CardList />
      </Box>
      <AddMovement />
      <HeaderList />
    </Teste>
  );
};
