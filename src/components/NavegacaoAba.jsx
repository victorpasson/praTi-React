import { useState } from "react";
import "./NavegacaoAba.module.css"

const conteudos = [
    [
    "Conteúdo 1",
    "Conteúdo 2",
    "Conteúdo 3"
    ],
    [
    "Conteúdo 4",
    "Conteúdo 5",
    "Conteúdo 6"
    ],
    [
    "Conteúdo 7",
    "Conteúdo 8",
    "Conteúdo 9"
    ],

]

const NavegacaoAba = () => {
    const [estadoAtual, setEstado] = useState(0);

    return(
        <div>
            <header>
                <h1>Exercício Navegação Abas</h1>
                <p>Aula +praTi - React.js</p>
            </header>
            <main>
                <nav id="abas">
                    <button onClick={() => setEstado(0)}>Aba 1</button>
                    <button onClick={() => setEstado(1)}>Aba 2</button>
                    <button onClick={() => setEstado(2)}>Aba 3</button>
                </nav>
                <div id="conteudo">
                    <ul>
                        {conteudos[estadoAtual].map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default NavegacaoAba;