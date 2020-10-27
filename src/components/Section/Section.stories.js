import { storiesOf } from "@storybook/react";
import React from "react";
import Section from "./Section";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Section", module)
  .add("Full-width Section", () => (
    <ThemeProvider theme={theme}>
      <Section background="#eee" fullWidth={true}>
        asdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
        loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
        loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
        loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
        loreasdasdasdasdasdasdasdadsasda lore
      </Section>
    </ThemeProvider>
  ))
  .add("Fixed-Width Section", () => (
    <ThemeProvider theme={theme}>
      <Section background="#eee" fullWidth={false}>
        asdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
        loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
        loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
        loreasdasdasdasdasdasdasdadsasda loreasdasdasdasdasdasdasdadsasda
        loreasdasdasdasdasdasdasdadsasda lore
      </Section>
    </ThemeProvider>
  ));
