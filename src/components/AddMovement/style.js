import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  background: #fff;
  max-width: 1120px;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgb(204 204 204) 0px 0px 5px;
  margin: 20px auto;
  justify-content: space-around;
  gap: 10px;
  padding: 15px 0px;
`;

export const BoxDest = styled.div`
  margin-bottom: 3px;
  font-size: 16px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 15px;
  border: 1px solid rgb(204, 204, 204);
`;
export const BoxInputs = styled.div`
  display: flex;
  gap: 10px;
`;
export const Button = styled.button`
  padding: 18px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 128, 128);
  transition: all 200ms ease-in 0s;
  font-size: 17px;
`;
