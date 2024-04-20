import React, { FC, useContext, useCallback } from 'react';
import cn from 'classnames';

import { $tictacContext } from '@src/context';

import styles from './cell.module.scss';

interface CellProps {
  fieldIndex: number;
  fieldSrc: number[];
}

// const L_45 = [0, 9, 10, 11, 12];

// const tictac = () =>
// index: number,
// tic: boolean,
// cache: Record<string, number[]>,
// game: State,
// left: number[],
// right: number[],
// {};

export const Cell: FC<CellProps> = (props) => {
  const { fieldIndex, fieldSrc } = props;
  const { setTic, tic, setGame, game } = useContext($tictacContext);

  const checkWin = useCallback(
    (cellIndex: number) => {
      const left = fieldSrc.slice(0, cellIndex).reverse();
      const right = fieldSrc.slice(cellIndex + 1);

      // const cache: Record<string, number[]> = {
      //   l45: [cellIndex],
      //   vert: [cellIndex],
      //   r45: [cellIndex],
      //   hor: [cellIndex],
      // };

      const runLength = Math.max(left.length, right.length);

      for (let i = 0; i < runLength; i++) {
        // tictac(i, tic, cache, game, left, right);
      }
    },
    [
      // tic,
      // game,
      fieldSrc,
    ],
  );

  return (
    <div
      tabIndex={0}
      role='button'
      onClick={() => {
        if (!game[fieldIndex]) {
          setGame({ key: fieldIndex, payload: tic ? 'tic' : 'tac' });
          setTic(!tic);
        }

        checkWin(fieldIndex);
      }}
      className={cn(styles.cell, {
        [styles.cell_interactive]: !game[fieldIndex],

        [styles.cell_tic]: game[fieldIndex] === 'tic',
        [styles.cell_tic_h]: tic && !game[fieldIndex],
        [styles.cell_tac]: game[fieldIndex] === 'tac',
        [styles.cell_tac_h]: !tic && !game[fieldIndex],
      })}
    >
      {fieldIndex}
    </div>
  );
};
