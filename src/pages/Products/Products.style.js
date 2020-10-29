import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

export const Error = styled.div`
  margin-top: 10px;
  background-color: orange;
  font-size: 1.4em;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid gray;
  margin-bottom: 1em;
`;
