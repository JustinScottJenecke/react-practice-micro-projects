import { useEffect, useState } from "react";

const LottoGame = () => {

    const [guesses, setGuesses] = useState([]);

    const generateNumber = () => {

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

            </div>
            <div>
                <input type="number" name="guess" id="guess"/>
                <button>Guess</button>
            </div>
        </section>
    )
}