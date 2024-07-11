import type { State } from '@src/context';

import { getFieldPosition } from './getFieldPosition';

const WINS: number[][] = [
  [0, 1, 2, 3],
  [-1, 0, 1, 2],
  [-2, -1, 0, 1],
  [-3, -2, -1, 0],

  [0, 8, 16, 24],
  [-8, 0, 8, 16],
  [-16, -8, 0, 8],
  [-24, -16, -8, 0],

  [0, 9, 18, 27],
  [-9, 0, 9, 18],
  [-18, -9, 0, 9],
  [-27, -18, -9, 0],

  [0, 7, 14, 21],
  [-7, 0, 7, 14],
  [-14, -7, 0, 7],
  [-21, -14, -7, 0],
];

export const checkMappedWins = (fieldI: number, tictac: 'tic' | 'tac', game: State) => {
  return WINS.map((lines) =>
    lines.map((n) => {
      const target = fieldI + n;
      const targetPos = getFieldPosition(target);

      if (n === 0) return [fieldI, tictac, targetPos];

      if (target < 0) return game[target + 64]?.tictac === tictac ? [target + 64, tictac, targetPos] : null;
      if (target > 63) return game[target - 64]?.tictac === tictac ? [target - 64, tictac, targetPos] : null;

      return game[target]?.tictac === tictac ? [target, tictac, targetPos] : null;
    }),
  )
    .filter((map) => {
      if (map?.[1]?.[2] !== 'middle' || map?.[2]?.[2] !== 'middle') return false;

      return map.every((v) => v?.[1] === tictac);
    })
    .flat();
};
