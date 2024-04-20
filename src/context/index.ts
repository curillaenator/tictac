import { createContext, Dispatch, SetStateAction } from 'react';

type Payload = null | 'tic' | 'tac';
export type State = Record<number, Payload>;
type Action = { key: number; payload: Payload };

interface TictacContext {
  tic: boolean;
  setTic: Dispatch<SetStateAction<boolean>>;
  game: State;
  setGame: Dispatch<Action>;
}

export const $tictacContext = createContext<TictacContext>({
  tic: true,
  setTic: () => {},
  game: {},
  setGame: () => {},
});
