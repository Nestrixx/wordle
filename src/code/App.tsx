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

  let temporaryPlaceholderForDailyWord = "rusty";
  let tempPlaceholderArray = temporaryPlaceholderForDailyWord.split("");
  let wordOfTheDayMap = new Map();

  const updateGameState = (char: string) =>{
    const updatedCurrentGameRound = gameState[gameRound];
    if (updatedCurrentGameRound.length < maximumNumberOfLettersPerGuess) {
      updatedCurrentGameRound.push(char);
      setGameState((prevState) => {
        let newState = [...prevState];
        newState[gameRound] = updatedCurrentGameRound;
        return newState;
      });
    }
  }

  const onBackspace = () =>{
    const currentGameState = gameState[gameRound];
    if (currentGameState.length > 0) {
      setGameState((prevState) => {
        let newState = [...prevState];
        newState[gameRound] = newState[gameRound].slice(0, -1);
        return newState;
      });
    }
  }

  const onSubmit = () => {
    let numberOfCorrectLettersInAGuess = 0; 
    tempPlaceholderArray.forEach((element) => {
      if(wordOfTheDayMap.get(element) === undefined){
        wordOfTheDayMap.set(element, 1);
      }
      else wordOfTheDayMap.set(element, wordOfTheDayMap.get(element) + 1);
    });

    if(gameState[gameRound].length < 5){
      console.log("this doesn't work");
    }
    else if (gameState.length <= numberOfTotalPossibleRounds) {
      tempPlaceholderArray.forEach((element, index) => {
        let currentLetterLookedAt = gameState[gameRound][index];
        if(element === currentLetterLookedAt){
          let tempInputBoxStyles = [...inputBoxStyles];
          tempInputBoxStyles[gameRound][index] = "greenLetterBox";
          setInputBoxStyles(tempInputBoxStyles);
          wordOfTheDayMap.set(currentLetterLookedAt, wordOfTheDayMap.get(currentLetterLookedAt) - 1);
        }

        else if(wordOfTheDayMap.get(currentLetterLookedAt) === undefined || wordOfTheDayMap.get(currentLetterLookedAt) === 0){
          console.log("gray");
        }
      });

      tempPlaceholderArray.forEach((element, index) => {
        let currentLetterLookedAt = gameState[gameRound][index];
        if(wordOfTheDayMap.get(currentLetterLookedAt) !== undefined && wordOfTheDayMap.get(currentLetterLookedAt) > 0){
          let tempInputBoxStyles = [...inputBoxStyles];
          tempInputBoxStyles[gameRound][index] = "yellowLetterBox";
          setInputBoxStyles(tempInputBoxStyles);
          wordOfTheDayMap.set(currentLetterLookedAt, wordOfTheDayMap.get(currentLetterLookedAt) - 1);
        }
      })

      let gameRoundClone = gameRound;
      gameRoundClone += 1;
      setGameRound(gameRoundClone);

      let newGameState = [...gameState];
      newGameState.push([]);
      setGameState(newGameState);
    }
    else{
      console.log("you can't do this there are only 5 game rounds");
    }
  }

  return (
    <div className="app">
      <Navbar />
      <div className="gameWrapper">
        <InputBoxes gameState={gameState} inputBoxStyles={inputBoxStyles} />
        <Keyboard
          onCharacterPress={(char) => {
            updateGameState(char)
          }}
          onBackspace={() => onBackspace()}
          onSubmit={() => onSubmit()}
        />
      </div>
    </div>
  );
};

export default App;
