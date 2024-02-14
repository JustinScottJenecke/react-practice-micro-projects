import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter( (prevState) => {prevState ++})
    }

    return (
        <section>
            <div>
                {counter}
            </div>
            <div>
                <button>Subtract</button>
                <button onClick={incrementCounter}>Add</button>
            </div>
        </section>
    );
}

export default Counter