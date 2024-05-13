import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import InputBoxes from "./InputBoxes";
import "../styles/app.scss";
import { useState } from "react";
import {
  maximumNumberOfLettersPerGuess,
  numberOfTotalPossibleRounds,
} from "../constants/constants";

const App = () => {
  const [gameState, setGameState] = useState<string[][]>([[]]);
  const [gameRound, setGameRound] = useState<number>(0);
  const [inputBoxStyles, setInputBoxStyles] = useState<string[][]>(() => {
    let inputBoxDefault: string[][] = [];
    for (let i = 0; i < numberOfTotalPossibleRounds; i++) {
      inputBoxDefault[i] = [];
      for (let j = 0; j < maximumNumberOfLettersPerGuess; j++) {
        inputBoxDefault[i][j] = "letterBox";
      }
    }
    return inputBoxDefault;
  });

  return (
    <div className="app">
      <Navbar />
      <div className="gameWrapper">
        <InputBoxes gameState={gameState} inputBoxStyles={inputBoxStyles} />
        <Keyboard
          gameState={gameState}
          setGameState={setGameState}
          gameRound={gameRound}
          setGameRound={setGameRound}
          setInputBoxStyles={setInputBoxStyles}
          inputBoxStyles={inputBoxStyles}
        />
      </div>
    </div>
  );
};

export default App;
