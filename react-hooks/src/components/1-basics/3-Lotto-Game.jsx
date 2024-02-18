import { useEffect, useRef, useState } from "react";

const LottoGame = () => {

    const NUM_GUESSES = 7;
    const INSTRUCTIONS =
        'A lucky number between 1 and 20 is generated through an algorithm. \n\n' 
        + 'You have 7 attempts to guess the lucky number. If you guess correctly, you win! If not? you lose :(' 
        + '\n\n Click continue to start.. and good luck! '
    ;

    const [gameStart, setGameStart] = useState(true);
    const [guesses, setGuesses] = useState([]);
    const guessRef = useRef(0);

    const generateLuckyNumber = () => {
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
            alert(INSTRUCTIONS);    
            setGameStart(false)
        }
        
    }, [gameStart])
 
    useEffect( () => {
        if (guesses.length === NUM_GUESSES) {

            const luckyNumber = generateLuckyNumber;
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
            <h2>Lucky Number!</h2>
            <div className="guess-container">
                <ol className="guesses-container">
                    {
                        guesses.map( (guess, i) => {
                            return (
                                <li key={i}>
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