import { useContext } from "react";
import "../styles/inputBoxes.scss";
import { GameStateContext } from "../contexts/GameStateContext";
const InputBoxes = () => {
  const { gameRound, gameState } = useContext(GameStateContext);

  //refactor this to use loops to generate the rows.

  return (
    <div className="boxWrapper">
      <div className="column1">
        <input
          className="letterBox"
          type="text"
          maxLength={1}
          value={gameState[gameRound]?.[0] ?? ""}
        />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
      </div>
      <div className="column2">
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
      </div>
      <div className="column3">
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
      </div>
      <div className="column4">
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
      </div>
      <div className="column5">
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
        <input className="letterBox" type="text" maxLength={1} />
      </div>
    </div>
  );
};

export default InputBoxes;
