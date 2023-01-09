import React from "react";
import { Form, BoxDest, Input, BoxInputs, Button } from "./style";
import { useState } from "react";

export const AddMovement = ({ handleSave }) => {
  const [descricao, setDescricao] = useState({});
  const [Values, setValues] = useState({});
  const [tipo, setTipo] = useState();

  // const hadleInputChange = (evento) => {
  //   const { name, value } = evento.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const headleCheckBox = (evento) => {
  //   const { name, value } = evento.target;
  //   setCheckValues({ ...checkValues, [name]: value });
  // };

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
          // value={formValues.descricao || ""}
        />
      </div>
      <div>
        <BoxDest>Valor</BoxDest>
        <Input
          required="true"
          id="valor"
          type="number"
          name="valor"
          onChange={(evento) => setValues(evento.target.value)}
          // value={formValues.valor || ""}
        />
      </div>
      <BoxInputs>
        <label>
          <input
            required="true"
            type="radio"
            name="movimentacao"
            onChange={() => setTipo(0)}
            value="entrada"
          />
          Entrada
        </label>
        <label>
          <input
            required="true"
            type="radio"
            name="movimentacao"
            onChange={() => setTipo(1)}
            value="saida"
          />
          Saída
        </label>
      </BoxInputs>
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};
