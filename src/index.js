import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { LocationProvider } from "./context/location.context";
import theme from "./theme";
import "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocationProvider>
        <Routes />
      </LocationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
