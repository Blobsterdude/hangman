import KeyboardBtns from "./KeyboardBtns";

const Keyboard = ({setSelectedLetters, correctLetters, keyReset=false}) => {

    let firstrow = "QWERTYUIOP"
    let secondrow = "ASDFGHJKL"
    let thirdrow = "ZXCVBNM"
    return (
    <div>
        <div className="keyboard-row">
            {firstrow.split('').map((char, i) => {
                return (
                    <KeyboardBtns
                        key={char} 
                        letter={char}
                        isCorrectLetter={correctLetters.includes(char.toLowerCase())} 
                        setSelectedLetters={setSelectedLetters}
                        disable={keyReset}
                    />
            )})}
        </div>
        <div className="keyboard-row">
            {secondrow.split('').map((char, i) => {
                    return (
                        <KeyboardBtns 
                            key={char} 
                            letter = {char} 
                            isCorrectLetter={correctLetters.includes(char.toLowerCase())} 
                            setSelectedLetters={setSelectedLetters}
                            disable={keyReset}
                        />
                )
            })}
        </div>
        <div className="keyboard-row">
            {thirdrow.split('').map((char, i) => {
                    return (
                            <KeyboardBtns 
                                key={char} 
                                letter = {char} 
                                isCorrectLetter={correctLetters.includes(char.toLowerCase())} 
                                setSelectedLetters={setSelectedLetters}
                                disable={keyReset}
                            />
                )
            })}
        </div>
    </div>
    );
}
export default Keyboard
