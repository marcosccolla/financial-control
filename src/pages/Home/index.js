import React from "react";
import { AddMovement } from "../../components/AddMovement";
import { CardList } from "../../components/CardLIst";
import { HeaderList } from "../../components/HeaderList";
import { Box, Titulo, Teste } from "./styles";
import { useState } from "react";

export const Home = () => {
  const [dataSales, setDataSales] = useState([]);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [atualizaInputs, setAtualizaInputs] = useState(0);

  const handleSave = (dados) => {
    const data = [...dataSales, dados];
    setDataSales(data);
    setAtualizaInputs(!atualizaInputs);
    localStorage.setItem(("Financeiro", JSON.stringify(data)));
  };

  const onDelete = (index) => {
    const data = dataSales;
    data.splice(index, 1);
    setDataSales(data);
    setAtualizaInputs(!atualizaInputs);
    localStorage.setItem(("Financeiro", JSON.stringify(data)));
  };

  return (
    <Teste>
      <Titulo>Controle Financeiro</Titulo>
      <Box>
        <CardList saldo={saldo} entrada={entrada} saida={saida} />
      </Box>
      <AddMovement handleSave={handleSave} />
      <HeaderList dataSales={dataSales} onDelete={onDelete} />
    </Teste>
  );
};
