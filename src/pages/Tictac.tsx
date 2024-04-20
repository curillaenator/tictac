import React, { FC, useMemo, useState, useReducer } from 'react';

import { Field } from '@src/features/field';
import { $tictacContext as Context } from '@src/context';

import styles from './styles.module.scss';

type Payload = null | 'tic' | 'tac';
type State = Record<number, Payload>;
type Action = { key: number; payload: Payload };

// tic is player me, tac is opponent
export const Tictac: FC = () => {
  const [tic, setTic] = useState<boolean>(true);
  const [game, setGame] = useReducer((s: State, a: Action): State => ({ ...s, [a.key]: a.payload }), {});

  return (
    <Context.Provider
      value={useMemo(
        () => ({
          game,
          tic,
          setTic,
          setGame,
        }),
        [game, tic, setTic, setGame],
      )}
    >
      <div className={styles.container}>
        <Field />
      </div>
    </Context.Provider>
  );
};
