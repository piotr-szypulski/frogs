export const getFrogIndex = (frogs, row, col) => frogs
  .findIndex(frog => frog.position.row === row && frog.position.col === col);