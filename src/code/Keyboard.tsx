import { Dispatch, SetStateAction } from "react";
import "../styles/keyboard.scss";
import { maximumNumberOfLettersPerGuess, numberOfTotalPossibleRounds } from "../constants/constants";

type Props = {
  gameState: string[][];
  setGameState: Dispatch<SetStateAction<string[][]>>;
  gameRound: number;
  setGameRound: Dispatch<SetStateAction<number>>;
};

const Keyboard: React.FC<Props> = ({
  gameState,
  setGameState,
  gameRound,
  setGameRound,
}) => {
  let temporaryPlaceholderForDailyWord = "rusty";

  const topRowKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const middleRowKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const lowRowKeys = ["z", "x", "c", "v", "b", "n", "m"];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentValue = event.currentTarget.value;
    const updatedCurrentGameRound = gameState[gameRound];
    if (updatedCurrentGameRound.length < maximumNumberOfLettersPerGuess) {
      updatedCurrentGameRound.push(currentValue);
      setGameState((prevState) => {
        let newState = [...prevState];
        newState[gameRound] = updatedCurrentGameRound;
        return newState;
      });
    }
  };

  // we have it where the current guess is comparing to the placeholder word and is comparing correctly
  // we will need to then advance the gameround state. change the styling for the inputboxes, and of course not hardcode the word of the day.
  const handleEnter = () => {
    // split the daily word into an array for comparison
    let tempPlaceholderArray = temporaryPlaceholderForDailyWord.split("");
    if (gameState.length <= numberOfTotalPossibleRounds) {
      // loop through each element and compare to our current gameState/ current guess
      tempPlaceholderArray.forEach((element, index) => {
        if (gameState[gameRound][index] === element) {
          console.log(true);
        } else console.log(false);
      });

      // updating gameRound
      let gameRoundClone = gameRound;
      gameRoundClone += 1;
      setGameRound(gameRoundClone);

      // now we need to push on a new empty array into gameState
      let newGameState = [...gameState];
      newGameState.push([]);
      setGameState(newGameState);
    }
    else{
      // update this with a popup message or something
      console.log("you can't do this there are only 5 game rounds");
    }
  };

  const handleBackspace = () => {
    const currentGameState = gameState[gameRound];
    if (currentGameState.length > 0) {
      setGameState((prevState) => {
        let newState = [...prevState];
        newState[gameRound] = newState[gameRound].slice(0, -1);
        return newState;
      });
    }
  };

  return (
    <div>
      <div className="keyboardRow">
        {topRowKeys.map((key) => (
          <button
            onClick={handleClick}
            className="testButton"
            type="button"
            key={key}
            value={key}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="keyboardRow">
        {middleRowKeys.map((key) => (
          <button
            onClick={handleClick}
            className="testButton"
            type="button"
            key={key}
            value={key}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="keyboardRow">
        <button onClick={handleEnter} className="enterButton" type="button">
          {"Enter"}
        </button>
        {lowRowKeys.map((key) => (
          <button
            onClick={handleClick}
            className="testButton"
            type="button"
            key={key}
            value={key}
          >
            {key}
          </button>
        ))}
        <button onClick={handleBackspace} className="backspaceButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="game-icon"
            data-testid="icon-backspace"
          >
            <path
              fill="white"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Keyboard;
