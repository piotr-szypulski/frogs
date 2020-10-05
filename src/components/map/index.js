import React, { useContext } from "react";
import { map, ranges } from "Config";
import { store } from '../../store';
import { getFrogIndex } from "../../utils";
import "./style.sass";

export default function Map() {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const placeFrog = (row, col) => {
    const frogIndex = getFrogIndex(state.frogs, row, col);
    const isActive = state.activeSquares.includes(`${row}:${col}`);

    if (frogIndex !== -1) {
      const { gender } = state.frogs[frogIndex];
    
      return (
        <div
          className={`map__col frog ${isActive ? "frog-active" : ""}`}
          key={`square_${row}${col}`}
          onClick={() => { handleSquareClick(row, col, frogIndex) }}
        >
          <div className={`frog-${gender}`} />
        </div>
      );
    } else {
      return (
        <div
          className={`map__col ${isActive ? "frog-active" : ""} ${inRange(row, col) ? "in-range" : ""}`}
          key={`square_${row}${col}`}
          onClick={() => { handleSquareClick(row, col) }}
        />
      );
    }
  };

  const handleSquareClick = (row, col) => {
    dispatch({ type: 'set active squares', "index": `${row}:${col}` });
  };

  const inRange = (row, col) => {
    if (state.activeSquares.length === 1) {
      const [activeRow, activeCol] = state.activeSquares[0].split(":");

      const frogIndex = getFrogIndex(state.frogs, Number(activeRow), Number(activeCol));
  
      if (frogIndex !== -1) {
        const gender = state.frogs[frogIndex].gender;
        const range = gender === "female" ? ranges.female : ranges.male;

        if (row >= Number(activeRow) - range
          && row <= Number(activeRow) + range
          && col >= Number(activeCol) - range
          && col <= Number(activeCol) + range) {
            return true;
          }
        return false;
      }
      return false;
    }
  };

  return (
    <div className="map">
    {
      Array(map.rows).fill(null).map((row, rowNumber) => (
        <div className="map__row" key={`row_${rowNumber}`}>
        {
          Array(map.cols).fill(null).map((col, colNumber) => (
            placeFrog(rowNumber, colNumber)
          ))
        }
        </div>
      ))
    }
    </div>
  );
}
