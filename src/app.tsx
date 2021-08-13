import React from "react";
import { useObserver, useService } from "react-soa/dist/hook";
import "./app.scss";
import { CounterService } from "./counterService";

export function App() {
  useObserver([CounterService]);

  const counterService = useService(CounterService);
  return (
    <div className="container">
      <div className="logo">{"{SOA}"}</div>
      <h1>Is Awesome</h1>
      <button onClick={() => counterService.increment()}>
        &#x1F49B;<span>{counterService.value}</span>
      </button>
    </div>
  );
}
