import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  font-size: 1.2em;
  border: 1px solid ${(props) => props.theme.primary.background};
  border-radius: 5px;
  margin-bottom: ${(props) => props.marginBottom};
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

export const Dropdown = styled.select`
  width: 100%;
  box-sizing: border-box;
  height: 34px;
  background-color: white;
  outline: 0;
  font-size: 1.2em;
  color: darkgray;
  border: 1px solid ${(props) => props.theme.primary.background};
  border-radius: 0;
  &:focus {
    border: 1px solid ${(props) => props.theme.global.active};
    color: black;
  }
`;

export const Radio = styled.input`
  margin: 10px;
`;
