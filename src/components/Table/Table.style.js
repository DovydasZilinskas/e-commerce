import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  & th {
    border-bottom: 2px solid #444;
    background-color: ${(props) => props.theme.secondary.background};
    padding: 5px;
  }
  & td {
    border: 1px dotted black;
    padding: 5px;
  }
`;
