import { useState } from "react"
import { useEffect } from "react";

const FunctionComponent = () => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const timeId = setInterval(() => {
            setContador(prev => {
                    if (prev ==  60){
                        return 0
                    } else{
                        return prev + 1
                    }
                }
            )
        }, 1000)

        return () => {
            clearInterval(timeId);
            console.log("Timer foi limpo.")
        }
    }, [])

    return(
        <h1>Contador: {contador}</h1>
    )
}

export default FunctionComponent;