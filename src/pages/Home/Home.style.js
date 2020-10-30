import styled from "styled-components";

export const InputBlock = styled.div`
  text-align: right;
  margin-top: 1em;
`;

export const Error = styled.div`
  background-color: ${(props) => props.theme.global.background};
  font-size: 1.4em;
  padding: 5px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  border: 1px solid gray;
`;
