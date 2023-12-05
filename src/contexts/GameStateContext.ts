import { createContext } from "react";

export type GameStateContextType = {
  gameState: { [key: string]: string[] };
  setGameState: React.Dispatch<
    React.SetStateAction<{ [key: string]: string[] }>
  >;
  gameRound: number;
  setGameRound: React.Dispatch<React.SetStateAction<number>>;
};

export const GameStateContext = createContext({
  gameState: {} as { [key: string]: string[] },
  setGameState: (() => {}) as React.Dispatch<
    React.SetStateAction<{ [key: string]: string[] }>
  >,
  gameRound: 0,
  setGameRound: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
});
