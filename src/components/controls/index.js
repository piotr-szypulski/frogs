import React, { useContext } from "react";
import { store } from '../../store';
import "./style.sass";

export default function Controls() {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const jump = () => {
    //TODO
  };

  const reproduce = () => {
    //TODO
  };

  return (
    <div className="controls">
      <button className="controls__button" onClick={jump}>⬆ JUMP</button>
      <button className="controls__button" onClick={reproduce}>♥ REPRODUCE</button>
    </div>
  );
};
