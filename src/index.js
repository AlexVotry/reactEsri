import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import App from './components/App';
import CalciteThemeProvider from "calcite-react/CalciteThemeProvider";
import { GlobalStyle } from "./styles/global";

const Root = () => {
  return (
    <BrowserRouter>
      <CalciteThemeProvider>
        <GlobalStyle />
        <App />
      </CalciteThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));