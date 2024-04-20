import { createContext, Dispatch, SetStateAction } from 'react';

type Payload = null | 'tic' | 'tac';
type Action = { key: number; payload: Payload; reset?: boolean };
export type State = Record<number, Payload>;

interface TictacContext {
  tic: boolean;
  setTic: Dispatch<SetStateAction<boolean>>;
  game: State;
  setGame: Dispatch<Action>;
  winner: null | 'tic' | 'tac';
  setWinner: Dispatch<SetStateAction<null | 'tic' | 'tac'>>;
}

export const $tictacContext = createContext<TictacContext>({
  tic: true,
  setTic: () => {},
  game: {},
  setGame: () => {},
  winner: null,
  setWinner: () => {},
});
