import React from "react";
import { Form, BoxDest, Input, BoxInputs, Button } from "./style";
import { useState } from "react";

export const AddMovement = ({ handleSave }) => {
  const [descricao, setDescricao] = useState({});
  const [Values, setValues] = useState({});
  const [tipo, setTipo] = useState();

  const hadleSubmit = (evento) => {
    evento.preventDefault();

    const dadosFinanceiros = {
      descricao: descricao,
      valor: Values,
      tipo: tipo,
    };

    handleSave(dadosFinanceiros);
    evento.target.reset();
  };

  return (
    <Form onSubmit={hadleSubmit}>
      <div>
        <BoxDest>Descrição</BoxDest>
        <Input
          required="true"
          type="text"
          id="descricao"
          name="descricao"
          onChange={(evento) => setDescricao(evento.target.value)}
        />
      </div>
      <div>
        <BoxDest>Valor</BoxDest>
        <Input
          required="true"
          id="valor"
          type="text"
          name="valor"
          onChange={(evento) => setValues(evento.target.value)}
        />
      </div>
      <BoxInputs>
        <label>
          <input
            required="true"
            type="radio"
            defaultChecked
            name="movimentacao"
            onChange={() => setTipo(0)}
          />
          Entrada
        </label>
        <label>
          <input
            required="true"
            type="radio"
            name="movimentacao"
            onChange={() => setTipo(1)}
          />
          Saída
        </label>
      </BoxInputs>
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};
