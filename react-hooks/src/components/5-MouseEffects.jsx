import { useEffect, useState } from "react";

const MouseEffects = () => {
    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect( () => {
        
        console.log('effect was triggered')
        window.addEventListener('mousemove', (e) => {
            console.log('mouseEvent');
            setX(e.clientX);
            setY(e.clientY);
        })

    }, [])
    
    return ( 
        <section>
            <h2>Mouse Coordinates</h2>
            <b>X: {x}</b> | <b>Y: {y}</b>
        </section>
     );
}

export default MouseEffects ;