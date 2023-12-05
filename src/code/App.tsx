import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import InputBoxes from "./InputBoxes";
import "../styles/app.scss";
import { useState } from "react";
import {
  GameStateContext,
  GameStateContextType,
} from "../contexts/GameStateContext";

function App() {
  const [gameState, setGameState] = useState({});
  const [gameRound, setGameRound] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <div className="gameWrapper">
        <GameStateContext.Provider
          value={{ gameState, setGameState, gameRound, setGameRound }}
        >
          <InputBoxes />
          <Keyboard />
        </GameStateContext.Provider>
      </div>
    </div>
  );
}

export default App;
