import { useEffect, useState } from "react";

const EffectErrors = () => {

    const [timer, setTimer] = useState(0)

    const tick = () => {
        setTimer(prev => prev + 1)
    }

    useEffect( () => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return ( 
        <>
            {timer}
        </>
     );
}

export default EffectErrors;