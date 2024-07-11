import React, { FC, useMemo, useState, useReducer } from 'react';

import { Field } from '@src/features/field';
import { Display } from '@src/features/display';

import { $tictacContext as Context, type State, type Action } from '@src/context';

import styles from './styles.module.scss';

// tic is player me, tac is opponent
export const Tictac: FC = () => {
  const [tic, setTic] = useState<boolean>(true);

  const [winner, setWinner] = useState<null | 'tic' | 'tac'>(null);
  const [line, setLine] = useState<number[]>([]);

  const [game, setGame] = useReducer((s: State, a: Action): State => {
    if (!a.payload?.reset) return { ...s, [a.key]: a.payload };

    return {};
  }, {});

  console.log(game);

  return (
    <Context.Provider
      value={useMemo(
        () => ({
          game,
          tic,
          winner,
          line,
          setLine,
          setTic,
          setGame,
          setWinner,
        }),
        [game, tic, setTic, setGame, winner, line, setLine],
      )}
    >
      <div className={styles.container}>
        <Field />

        <Display />
      </div>
    </Context.Provider>
  );
};
