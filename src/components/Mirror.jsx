import { useState } from "react";
import "./Mirror.module.css"

const Mirror = () => {
    const [area, setArea] = useState();

    return(
        <div>
            <h1>Mirror</h1>
            <textarea onChange={(e) => setArea(e.target.value)}></textarea>
            <p>Você está digitando: {area}</p>
        </div>
    )
}

export default Mirror;
