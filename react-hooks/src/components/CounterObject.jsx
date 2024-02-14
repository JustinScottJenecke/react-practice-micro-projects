import { count } from "console"
import { useState } from "react"

const CounterObject = () => {

    const counterObject = {
        title: 'tally app with objects',
        value: 0,
        increment: (setter) => {
            setter(prevState => prevState+1)
        },
        decrement: (setter) => {
            setter(prevState => prevState-1)
        }
    }

    const [counter, setCounter] = useState(counterObject)

    return (
        <section>
            <h2>
                {counter.title}
            </h2>
            <div>
                {counter.value}
            </div>
            <div>
                <button onClick={ () => counter.decrement(setCounter)}>Subtract</button>
                <button onClick={ () => counter.increment(setCounter)}>Add</button>
            </div>
        </section>
    )
}
export default CounterObject