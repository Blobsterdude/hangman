import { useState } from "react";

const KeyboardBtns = ({letter, setSelectedLetters, isCorrectLetter, disable}) => {
    const [selfDisable, setSelfDisable] = useState(false)
    
    if (disable && selfDisable)
    {
      setSelfDisable(false);
    }
    return (
        <button
        className={`keyboard-button ${isCorrectLetter===true ? 'correct' : ''}`}
        key={letter}
        value={letter}
        onClick={()=>
          {
            setSelectedLetters(letter.toLowerCase());
            setSelfDisable(true);
          }}
        disabled={selfDisable}
        >
        {letter}
        </button>  
      );
}

export default KeyboardBtns