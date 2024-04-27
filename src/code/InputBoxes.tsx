import "../styles/inputBoxes.scss";
const InputBoxes = () => {
  const columns = 5;
  const inputsPerColumn = 5;
  //refactor this to use loops to generate the rows.

  return (
    <div className="boxWrapper">
      <div className="column1">
        <input className="letterBox" type="text" maxLength={1} />
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
