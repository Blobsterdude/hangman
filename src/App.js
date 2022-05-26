import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Picture';
import Moves from './components/Moves';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import Keyboard from './components/Keyboard';
import * as GL from './helpers/gameLogic';
import { showNotification as show, checkWin, resetKeyboard } from './helpers/helpers';

import './App.css';

const words = ['application', 'programming', 'tiktok', 'apple', 'react', 'university', 'coding', 'software', 'computer', 'technology', 'python'];
//const words = ['high'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let movesDone = 0;

function App() {
  const [, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [keyboardDisable, setKeyboardDisable] = useState(false);

  useEffect(() => {

  }); 
    
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    resetKeyboard(setKeyboardDisable)

    const randomNum = Math.floor(Math.random() * words.length);
    selectedWord = words[randomNum];
    movesDone = 0;
  }

  // Keyboard functions
  function setSelectedLetters(letter) {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(currentLetters => [...currentLetters, letter]);
      } else {
        show(setShowNotification);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(currentLetters => [...currentLetters, letter]);
        movesDone = movesDone + 1;
      } else {
        show(setShowNotification);
      }
    }
  }
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Moves movesPassed={GL.NUM_LIVES - movesDone}/>
      {/* Keyboard functions */}
      <Keyboard 
        setSelectedLetters={setSelectedLetters}
        correctLetters={correctLetters} 
        keyReset={keyboardDisable}/>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;