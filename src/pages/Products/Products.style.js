import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Error = styled.div`
  margin-top: 10px;
  background-color: ${(props) => props.theme.global.background};
  font-size: 1.4em;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid gray;
  margin-bottom: 1em;
`;

export const HeadingText = styled.h1`
  font-size: 1.4em;
`;
