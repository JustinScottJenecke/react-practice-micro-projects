
import { useState } from "react";

const CounterPrevState = () => {


    const [counter, setCounter] = useState(0)

    return (
        <section>
            <div>
                {counter}
            </div>
            <div>
                <button onClick={ () => setCounter(prevState => prevState -1)}>Subtract</button>
                <button onClick={ () => setCounter(prevState => prevState +1)}>Add</button>
            </div>
        </section>
    );
}

export default CounterPrevState