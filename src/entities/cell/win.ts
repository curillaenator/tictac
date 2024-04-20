import type { State } from '@src/context';

const HOR = [
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

export const checkMappedWins = (i: number, tictac: 'tic' | 'tac', game: State) =>
  HOR.map((lines) =>
    lines
      .map((n) => {
        const target = i + n;

        if (n === 0) return tictac;
        if (i + n < 0) return game[target + 64] === tictac ? tictac : null;
        if (i + n > 63) return game[target - 64] === tictac ? tictac : null;

        return game[target] === tictac ? tictac : null;
      })
      .every((v) => v === tictac),
  ).some(Boolean);
