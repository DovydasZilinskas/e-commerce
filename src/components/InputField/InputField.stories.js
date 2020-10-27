import { storiesOf } from "@storybook/react";
import React from "react";
import InputField from "./InputField";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Input", module)
  .add("Text field", () => (
    <ThemeProvider theme={theme}>
      <InputField
        placeholder="Name"
        type="text"
        handleChange={(e) => console.log(e.target.value)}
      />
    </ThemeProvider>
  ))
  .add("Number field", () => (
    <ThemeProvider theme={theme}>
      <InputField
        placeholder="Age"
        type="number"
        handleChange={(e) => console.log(e.target.value)}
      />
    </ThemeProvider>
  ))
  .add("TextArea", () => (
    <ThemeProvider theme={theme}>
      <InputField
        placeholder="LongText"
        type="longtext"
        handleChange={(e) => console.log(e.target.value)}
      >
        Long text
      </InputField>
    </ThemeProvider>
  ));
