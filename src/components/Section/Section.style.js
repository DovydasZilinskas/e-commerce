import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.background};
  max-width: ${(props) =>
    props.maxWidth === "max" ? "100%" : props.theme.webWidth};
  margin: 0 auto;
  text-align: ${(props) => props.align};
`;

export const Wrapper = styled.section`
  max-width: ${(props) => props.theme.webWidth};
  padding: 1em 2em;
  margin: 0 auto;
`;
