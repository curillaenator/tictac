import { createContext, Dispatch, SetStateAction } from 'react';

type Payload = {
  tictac: 'tic' | 'tac';
  fieldPosition: 'top' | 'bottom' | 'left' | 'right' | 'middle' | 'tl' | 'tr' | 'br' | 'bl';
  reset?: boolean;
};

type Action = { key: number; payload: Payload | null };

type State = Record<number, Payload | null>;

interface TictacContext {
  tic: boolean;
  setTic: Dispatch<SetStateAction<boolean>>;
  game: State;
  setGame: Dispatch<Action>;
  winner: null | 'tic' | 'tac';
  setWinner: Dispatch<SetStateAction<null | 'tic' | 'tac'>>;
  line: number[];
  setLine: Dispatch<SetStateAction<number[]>>;
}

const $tictacContext = createContext<TictacContext>({
  tic: true,
  setTic: () => {},
  game: {},
  setGame: () => {},
  winner: null,
  setWinner: () => {},
  line: [],
  setLine: () => {},
});

export { $tictacContext, type State, type Payload, type Action };
