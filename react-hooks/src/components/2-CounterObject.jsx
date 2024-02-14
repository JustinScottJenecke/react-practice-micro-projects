import { useState } from "react"

const CounterObject = () => {

    const counterObject = {
        title: 'tally app with objects',
        value: 0
    }

    const increment = () => {
        let {title, value} = counter
        setCounter(
            {
                ...counter,
                value: value+1
            }
        )
    }

    const decrement = () => {
        let value = counter.value
        setCounter(
            {
                ...counter,
                value: value -1
            }
        )
    }

    const [counter, setCounter] = useState(counterObject)

    return (
        <section>
            <input type="text" value={counter.title} onChange={ e => setCounter({ ...counter, title: e.target.value })}/>
            <br />
            <hr />
            <br />
            <h2>
                {counter.title}
            </h2>
            <div>
                {counter.value}
            </div>
            <div>
                <button onClick={ decrement}>Subtract</button>
                <button onClick={ increment}>Add</button>
            </div>
        </section>
    )
}
export default CounterObject