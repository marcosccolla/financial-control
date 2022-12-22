import React from "react";
import { Form, BoxDest, Input, BoxInputs, Button } from "./style";

export const AddMovement = () => {
  const Salvar = (evento) => {
    evento.preventDefault();
    console.log("foi submetido");
  };
  return (
    <Form onSubmit={Salvar}>
      <div>
        <BoxDest>Descrição</BoxDest>
        <Input type="text" />
      </div>
      <div>
        <BoxDest>Valor</BoxDest>
        <Input type="text" />
      </div>
      <BoxInputs>
        <input type="radio" name="name" />
        <label>Entrada</label>
        <input type="radio" name="name" />
        <label>Saída</label>
      </BoxInputs>
      <Button>Adicionar</Button>
    </Form>
  );
};
