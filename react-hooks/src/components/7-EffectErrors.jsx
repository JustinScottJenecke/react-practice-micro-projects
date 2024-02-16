import { useState } from "react";

const EffectErrors = () => {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prev => prev + 1)
    }

    return ( 
        <>
            {count}
        </>
     );
}

export default EffectErrors;