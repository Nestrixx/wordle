import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import InputBoxes from "./InputBoxes";
import "../styles/app.scss";
import { useState } from "react";

function App() {
  const [gameState, setGameState] = useState({});
  const [gameRound, setGameRound] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <div className="gameWrapper">
          <InputBoxes />
          <Keyboard />
      </div>
    </div>
  );
}

export default App;
