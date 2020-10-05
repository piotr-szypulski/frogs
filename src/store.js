import React, {createContext, useReducer} from 'react';

const initialState = {
  activeSquares: ["0:0"],
  frogs: [
    { gender: "female", traits: ["tall", "slim"], position: { row: 0, col: 0 } },
    { gender: "male", traits: ["short", "fat"], position: { row: 0, col: 1 } },
    { gender: "male", traits: ["tall", "fat"], position: { row: 3, col: 5 } }
  ]
};

const store = createContext(initialState);
const { Provider } = store;

const setActiveSquares = (state, index) => {
  const activeSquares = state.activeSquares.includes(index)
    ? state.activeSquares.filter(squareIndex => squareIndex !== index)
    : [...new Set([...state.activeSquares, index])].slice(-2);

  return { ...state, activeSquares };
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'set active squares':
        return setActiveSquares(state, action.index);
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
