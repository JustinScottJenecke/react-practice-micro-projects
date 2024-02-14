
import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter( prevState => prevState + 1)
        console.log(counter)
    }
    const decrementCounter = () => {
        setCounter(counter - 1)
        console.log(counter)
    }

    return (
        <section>
            <div>
                {counter}
            </div>
            <div>
                <button onClick={ () => decrementCounter}>Subtract</button>
                <button onClick={ () => incrementCounter}>Add</button>
            </div>
        </section>
    );
}

export default Counter