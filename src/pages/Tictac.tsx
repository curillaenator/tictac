import React, { FC, useMemo, useState, useReducer } from 'react';

import { Field } from '@src/features/field';
import { Display } from '@src/features/display';

import { $tictacContext as Context } from '@src/context';

import styles from './styles.module.scss';

type Payload = null | 'tic' | 'tac';
type State = Record<number, Payload>;
type Action = { key: number; payload: Payload; reset: boolean };

// tic is player me, tac is opponent
export const Tictac: FC = () => {
  const [tic, setTic] = useState<boolean>(true);

  const [winner, setWinner] = useState<null | 'tic' | 'tac'>(null);
  const [line, setLine] = useState<number[]>([]);

  const [game, setGame] = useReducer((s: State, a: Action): State => {
    if (!a.reset) return { ...s, [a.key]: a.payload };
    return {};
  }, {});

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
