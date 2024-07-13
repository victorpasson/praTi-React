import { useState } from "react";

const itensArray = [
    ["Teste 1", "Teste 2", "Teste 3", "Teste 4"],
    ["Teste 5", "Teste 6", "Teste 7", "Teste 8"],
    ["Teste 9", "Teste 10", "Teste 11", "Teste 12"],
    ["Teste 13", "Teste 14", "Teste 15", "Teste 16"],
]

const NavAbas = () => {

    const [content, setContent] = useState(itensArray[0])

    let handleClick = (e) => {
        setContent(itensArray[e]);
    }

    return(
        <>
            <button onClick={() => handleClick(0)}>Why React?</button>
            <button onClick={() => handleClick(1)}>Core Features</button>
            <button onClick={() => handleClick(2)}>Related Resources</button>
            <button onClick={() => handleClick(3)}>React vs JS</button>
            <ul>
                {content.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default NavAbas;