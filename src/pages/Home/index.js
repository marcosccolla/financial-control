import { AddMovement } from "../../components/AddMovement";
import { CardList } from "../../components/CardLIst";
import { HeaderList } from "../../components/HeaderList";
import { Box, Titulo, Teste } from "./styles";
import { useState, useEffect, React } from "react";

export const Home = () => {
  const [dataSales, setDataSales] = useState(
    JSON.parse(localStorage.getItem("Financeiro")) ?? []
  );
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [atualizaInputs, setAtualizaInputs] = useState(0);

  useEffect(() => {
    const TotalSaida = dataSales
      .filter((item) => item.tipo === 1)
      .map((transaction) => Number(transaction.valor));

    const TotalEntrada = dataSales
      .filter((item) => item.tipo === 0)
      .map((transaction) => Number(transaction.valor));

    const Entradas = TotalEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const Saidas = TotalSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const SaldoTotal = Math.abs(Entradas - Saidas).toFixed(2);

    setSaldo(SaldoTotal);
    setEntrada(Entradas);
    setSaida(Saidas);
  }, [atualizaInputs, dataSales]);

  const handleSave = (dados) => {
    const data = [...dataSales, dados];
    setDataSales(data);
    setAtualizaInputs(!atualizaInputs);
    localStorage.setItem("Financeiro", JSON.stringify(data));
  };

  const onDelete = (index) => {
    const data = dataSales;
    data.splice(index, 1);
    setDataSales(data);
    setAtualizaInputs(!atualizaInputs);
    localStorage.setItem("Financeiro", JSON.stringify(data));
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
