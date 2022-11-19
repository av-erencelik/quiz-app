import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./components/state/context";
import App from "./containers/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
