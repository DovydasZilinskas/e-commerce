import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  font-size: 1.2em;
  border: 1px solid ${(props) => props.theme.primary.background};
  border-radius: 5px;
  &:focus {
    border: 1px solid ${(props) => props.theme.global.active};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  font-size: 1.2em;
  border: 1px solid ${(props) => props.theme.primary.background};
  border-radius: 5px;
  &:focus {
    border: 1px solid ${(props) => props.theme.global.active};
    outline: none;
  }
`;
