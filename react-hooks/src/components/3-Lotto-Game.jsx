import { useEffect, useRef, useState } from "react";

const LottoGame = () => {

    const [guesses, setGuesses] = useState([]);
    const guessRef = useRef(0);

    const generateNumber = () => {
        return Math.floor(Math.random() * 10) + 1
    }

    const appendGuess = (newGuess) => {
        setGuesses([...guesses, newGuess])
    }

    const guessClickHandler = (e) => {
        const guess = document.querySelector('#guess')
        // console.log(guess.value)
        appendGuess(guess.value)
    }

    useEffect( () => {
        if (guesses.length === 3) {
            alert('game over')
        } 
    }, [guesses])

    return (
        <section>
            <h2>Lotto Game</h2>
            <div className="guess-container">
                <ul>
                    {
                        guesses.map( guess => {
                            return (
                                <li>
                                    {guess}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr />
            <div>
                <input type="number" name="guess" id="guess"/>
                <button onClick={ (e) => guessClickHandler(e)}>Guess</button>
            </div>
        </section>
    )
}

export default LottoGame