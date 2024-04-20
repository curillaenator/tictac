import React, { FC, useContext } from 'react';
import cn from 'classnames';

import { $tictacContext } from '@src/context';
import { checkMappedWins } from '@src/entities';

import styles from './cell.module.scss';

interface CellProps {
  fieldIndex: number;
}

export const Cell: FC<CellProps> = (props) => {
  const { fieldIndex } = props;
  const { setTic, tic, setGame, game, setWinner, winner } = useContext($tictacContext);

  return (
    <button
      tabIndex={0}
      type='button'
      disabled={!!winner}
      onClick={() => {
        if (!game[fieldIndex]) {
          if (checkMappedWins(fieldIndex, tic ? 'tic' : 'tac', game)) setWinner(tic ? 'tic' : 'tac');

          setGame({ key: fieldIndex, payload: tic ? 'tic' : 'tac' });
          setTic(!tic);
        }
      }}
      className={cn(styles.cell, {
        [styles.cell_interactive]: !game[fieldIndex],

        [styles.cell_tic]: game[fieldIndex] === 'tic',
        [styles.cell_tac]: game[fieldIndex] === 'tac',

        [styles.cell_tic_h]: tic && !game[fieldIndex] && !winner,
        [styles.cell_tac_h]: !tic && !game[fieldIndex] && !winner,
      })}
    />
  );
};
