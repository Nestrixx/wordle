import { numberOfTotalPossibleRounds } from "../constants/constants";
import "../styles/inputBoxes.scss";

type Props = {
  gameState: string[][];
  inputBoxStyles: string[][];
};

const InputBoxes: React.FC<Props> = ({ gameState, inputBoxStyles }) => {
  return (
    <div className="boxWrapper">
      {new Array(numberOfTotalPossibleRounds).fill("").map((element, index) => {
        return (
          <div className="column" key={index}>
            <input
              className={inputBoxStyles[index][0]}
              type="text"
              maxLength={1}
              value={gameState[index]?.[0] || ""}
              readOnly
            />
            <input
              className={inputBoxStyles[index][1]}
              type="text"
              maxLength={1}
              value={gameState[index]?.[1] || ""}
              readOnly
            />
            <input
              className={inputBoxStyles[index][2]}
              type="text"
              maxLength={1}
              value={gameState[index]?.[2] || ""}
              readOnly
            />
            <input
              className={inputBoxStyles[index][3]}
              type="text"
              maxLength={1}
              value={gameState[index]?.[3] || ""}
              readOnly
            />
            <input
              className={inputBoxStyles[index][4]}
              type="text"
              maxLength={1}
              value={gameState[index]?.[4] || ""}
              readOnly
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputBoxes;
