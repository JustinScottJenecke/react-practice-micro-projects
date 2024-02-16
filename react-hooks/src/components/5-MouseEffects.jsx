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

    })
    
    return ( 
        <section>

        </section>
     );
}

export default MouseEffects ;