import { useEffect, useState } from "react";

const EffectErrors = () => {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prev => prev + 1)
    }

    useEffect( () => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return ( 
        <>
            {count}
        </>
     );
}

export default EffectErrors;