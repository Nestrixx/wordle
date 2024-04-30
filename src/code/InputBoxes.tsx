import "../styles/inputBoxes.scss";

type Props = {
  gameState: string[][];
}

const InputBoxes: React.FC<Props> = ({gameState}) => {

  return (
    <div className="boxWrapper">
      <div className="column1">
        <input className="letterBox" type="text" maxLength={1} value={ gameState[0]?.[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[0]?.[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[0]?.[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[0]?.[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[0]?.[4] || ''} readOnly />
      </div>
      <div className="column2">
        <input className="letterBox" type="text" maxLength={1} value={ gameState[1]?.[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[1]?.[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[1]?.[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[1]?.[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[1]?.[4] || ''} readOnly />
      </div>
      <div className="column3">
        <input className="letterBox" type="text" maxLength={1} value={ gameState[2]?.[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[2]?.[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[2]?.[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[2]?.[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[2]?.[4] || ''} readOnly />
      </div>
      <div className="column4">
        <input className="letterBox" type="text" maxLength={1} value={ gameState[3]?.[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[3]?.[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[3]?.[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[3]?.[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[3]?.[4] || ''} readOnly />
      </div>
      <div className="column5">
        <input className="letterBox" type="text" maxLength={1} value={ gameState[4]?.[0] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[4]?.[1] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[4]?.[2] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[4]?.[3] || ''} readOnly />
        <input className="letterBox" type="text" maxLength={1} value={ gameState[4]?.[4] || ''} readOnly />
      </div>
    </div>
  );
};

export default InputBoxes;
