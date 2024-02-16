import { useState } from "react";
import MouseEffects from "./5-MouseEffects";

const CleanupEffects = () => {

    const [display, setDisplay] = useState(true)

    return ( 
        <section>
            <button onClick={() => setDisplay(!display)}>
                Toggle Display
            </button>
            {display && <MouseEffects />}
        </section> 
    );
}

export default CleanupEffects;