import React from "react";
import ReactDOM from "react-dom";
import Map from "Components/map";
import Controls from "Components/controls"
import { StateProvider } from "./store";
import "./css/main.sass";


const App = () => (
  <StateProvider>
    <Map />
    <Controls />
  </StateProvider>
);

ReactDOM.render(<App />, document.querySelector("#app"));
