import { Form, BoxDest, Input, BoxInputs, Button, Break } from "./style";
import { useState, React } from "react";

export const AddMovement = ({ handleSave, erro }) => {
  const [descricao, setDescricao] = useState("");
  const [values, setValues] = useState("");
  const [tipo, setTipo] = useState(0);

  const hadleSubmit = (evento) => {
    evento.preventDefault();
    console.log("eu");

    const dadosFinanceiros = {
      descricao: descricao,
      valor: values,
      tipo: tipo,
    };

    handleSave(dadosFinanceiros);
    setValues("");
    setDescricao("");
  };

  return (
    <Form onSubmit={hadleSubmit}>
      <div>
        <BoxDest>Descrição</BoxDest>
        <Input
          required={true}
          type="text"
          id="descricao"
          name="descricao"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
        />
      </div>
      <div>
        <BoxDest>Valor</BoxDest>
        <Input
          required={true}
          id="valor"
          type="number"
          name="valor"
          value={values}
          onChange={(evento) => setValues(evento.target.value)}
        />
      </div>
      <BoxInputs>
        <label>
          <input
            required={true}
            type="radio"
            name="movimentacao"
            checked={tipo === 0}
            onChange={() => setTipo(0)}
          />
          Entrada
        </label>
        <label>
          <input
            required={true}
            type="radio"
            name="movimentacao"
            checked={tipo === 1}
            onChange={() => setTipo(1)}
          />
          Saída
        </label>
      </BoxInputs>
      <Button type="submit">Adicionar</Button>
      {erro && (
        <>
          <Break />
          <span>{erro}</span>
        </>
      )}
    </Form>
  );
};
