import React from "react";
import { Form, BoxDest, Input, BoxInputs, Button } from "./style";
import { useState } from "react";

export const AddMovement = () => {
  const [formValues, setFormValues] = useState({});
  const [checkValues, setCheckValues] = useState({});

  const hadleInputChange = (evento) => {
    const { name, value } = evento.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const headleCheckBox = (evento) => {
    const { name, value } = evento.target;
    setCheckValues({ ...checkValues, [name]: value });
  };

  const hadleSubmit = (evento) => {
    evento.preventDefault();
    const formData = new FormData(evento.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  };
  console.log("*** formValues", formValues);

  return (
    <Form onSubmit={hadleSubmit}>
      <div>
        <BoxDest>Descrição</BoxDest>
        <Input
          required="true"
          type="text"
          id="descricao"
          name="descricao"
          onChange={hadleInputChange}
          value={formValues.descricao || ""}
        />
      </div>
      <div>
        <BoxDest>Valor</BoxDest>
        <Input
          required="true"
          id="valor"
          type="number"
          name="valor"
          onChange={hadleInputChange}
          value={formValues.valor || ""}
        />
      </div>
      <BoxInputs>
        <label>
          <input
            required="true"
            type="radio"
            name="movimentacao"
            onChange={headleCheckBox}
            value="entrada"
          />
          Entrada
        </label>
        <label>
          <input
            required="true"
            type="radio"
            name="movimentacao"
            onChange={headleCheckBox}
            value="saida"
          />
          Saída
        </label>
      </BoxInputs>
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};
