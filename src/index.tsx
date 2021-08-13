import React from "react";
import { render } from "react-dom";
import { createStore, SoaProvider } from "react-soa";
import { App } from "./app";
import "./index.scss";

(async function () {
  const store = createStore();
  render(
    <React.StrictMode>
      <SoaProvider store={store}>
        <App />
      </SoaProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();

// Register the PWA application
require("./serviceWorker").register();
