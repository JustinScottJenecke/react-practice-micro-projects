import { useEffect, useRef, useState } from "react";

const LottoGame = () => {

    const NUM_GUESSES = 7;

    const [gameStart, setGameStart] = useState(true);
    const [guesses, setGuesses] = useState([]);
    const guessRef = useRef(0);

    const generateNumber = () => {
        return Math.floor(Math.random() * 20) + 1;
    }

    // for (let i = 0; i < 10; i++) {
    //     console.log(generateNumber());
    // }

    const appendGuess = (newGuess) => {
        setGuesses([...guesses, newGuess]);
    }

    const guessClickHandler = (e) => {
        const guess = document.querySelector('#guess');
        // console.log(guess.value)
        appendGuess(parseInt(guess.value));
    }

    useEffect( () => {
        if (gameStart) {
            alert('You have 7 attempts to guess the lucky number. Click continue to start.. \n\n GoodLuck! ');    
            setGameStart(false)
        }
        
    }, [gameStart])
 
    useEffect( () => {
        if (guesses.length === NUM_GUESSES) {

            const luckyNumber = 1;
            let winner = false;

            // compare lucky number to guesses
            guesses.forEach(guess => {
              if(guess === luckyNumber)
                winner = true;
                return
            });

            if(winner)  
                alert(`congrats you won.. The lucky number was ${luckyNumber}`);
            else
                alert(`Game over... you lose. The lucky number was ${luckyNumber}`);
            
            // refresh game controller variabels and state
            setGuesses([])
            setGameStart(true)
        } 
    }, [guesses])

    return (
        <section>
            <h2>Lotto Game</h2>
            <div className="guess-container">
                <ol className="guesses-container">
                    {
                        guesses.map( guess => {
                            return (
                                <li>
                                    {guess}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
            <hr />
            <div>
                <input type="number" name="guess" defaultValue={0} id="guess"/>
                <button onClick={ (e) => guessClickHandler(e)}>Guess</button>
            </div>
        </section>
    )
}

export default LottoGame