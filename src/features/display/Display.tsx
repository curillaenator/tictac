import React, { FC, useContext } from 'react';

import { $tictacContext } from '@src/context';

import styles from './display.module.scss';

export const Display: FC = () => {
  const { winner, setGame, setWinner, setLine } = useContext($tictacContext);

  return (
    <div className={styles.display}>
      <div className={styles.content}>
        <h3>MEGA GAME =)</h3>

        {winner && (
          <div className={styles.winner}>
            <h3>Winner is</h3>
            <span>{winner === 'tic' ? 'Cross' : 'Bubbles'}</span>
          </div>
        )}
      </div>

      <button
        className={styles.button}
        disabled={!winner}
        onClick={() => {
          setWinner(null);
          setLine([]);
          setGame({
            key: 0,
            payload: {
              fieldPosition: 'tl',
              tictac: 'tac',
              reset: true,
            },
          });
        }}
      >
        Reset
      </button>
    </div>
  );
};
