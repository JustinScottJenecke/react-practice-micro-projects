
import { useEffect, useState } from "react"

const CounterEffects = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => {setCount(prevCount => prevCount + 1)}}>
                you clicked {count} {count == 1 ? 'time' : 'times'}
            </button>
        </div>
    )
}

export default CounterEffects