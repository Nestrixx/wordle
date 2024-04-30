import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import InputBoxes from "./InputBoxes";
import "../styles/app.scss";
import { useState } from "react";

const App = () => {
  const [gameState, setGameState] = useState<string[][]>([[]]);
  const [gameRound, setGameRound] = useState<number>(0);

  return (
    <div className="app">
      <Navbar />
      <div className="gameWrapper">
        <InputBoxes gameState={gameState} />
        <Keyboard
          gameState={gameState}
          setGameState={setGameState}
          gameRound={gameRound}
        />
      </div>
    </div>
  );
};

export default App;
