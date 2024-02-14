import { useEffect, useState } from "react";

const LottoGame = () => {

    const [guesses, setGuesses] = useState([]);

    const generateNumber = () => {
        return Math.floor(Math.random() * 10) + 1
    }

    const appendGuess = (newGuess) => {
        setGuesses([...guesses, newGuess])
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
                            <li>
                                {guess}
                            </li>
                        })
                    }
                </ul>
            </div>
            <div>
                <input type="number" name="guess" id="guess"/>
                <button>Guess</button>
            </div>
        </section>
    )
}

export default LottoGame