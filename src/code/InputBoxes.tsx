import "../styles/inputBoxes.scss";

type Props = {
  gameState: string[][];
}

const InputBoxes: React.FC<Props> = ({gameState}) => {
  // const columns = 5;
  // const inputsPerColumn = 5;
  //refactor this to use loops to generate the rows.

  return (
    <div className="boxWrapper">
      <div className="column1">
        <input className="letterBox" type="text" maxLength={1} value={gameState[0][0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={gameState[0][1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={gameState[0][2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={gameState[0][3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={gameState[0][4] || ''} readOnly />
      </div>
      {/* <div className="column2">
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[4] || ''} readOnly />
      </div>
      <div className="column3">
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[4] || ''} readOnly />
      </div>
      <div className="column4">
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[4] || ''} readOnly />
      </div>
      <div className="column5">
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={currentGuess[4] || ''} readOnly />
      </div> */}
    </div>
  );
};

export default InputBoxes;
