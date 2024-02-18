import { useState } from "react";
import MouseEffects from "./5-MouseEffects";
import TimerEffectErrors from "./7-TimerEffectErrors";

const CleanupEffects = () => {

    const [display, setDisplay] = useState(false);
    const [displayTimer, setDisplayTimer] = useState(false);

    return ( 
        <section>
            <button onClick={() => setDisplay(!display)}>
                Toggle Mouse Tracker
            </button>
            {display && <MouseEffects />}

            <button onClick={() => setDisplayTimer(!displayTimer)}>
                Toggle Timer
            </button>
            <br />
            {displayTimer && <TimerEffectErrors />}
        </section> 
    );
}

export default CleanupEffects;