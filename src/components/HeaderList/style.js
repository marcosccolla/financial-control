import styled from "styled-components";

export const Table = styled.table`
  justify-content: space-around;
  background: #fff;
  margin: 20px auto;
  max-width: 1120px;
  border-bottom: inset;
  border-radius: 5px;
  box-shadow: rgb(204 204 204) 0px 0px 5px;
  padding: 20px;
  width: 98%;
`;
export const Th = styled.th`
  border-bottom: 2px solid #d3d3d3;
  padding-bottom: 5px;
  text-align: start;
  font-weight: 700;
`;
export const Td = styled.td`
  padding-top: 15px;
  /* text-align: center; */
  word-break: break-all;

  svg {
    width: 20px;
    height: 20px;
    text-align: center;
  }

  &:last-child {
    cursor: pointer;
  }
`;
