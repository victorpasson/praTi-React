import { useState } from "react";

const Form = () => {
    const [ name, setName ] = useState("")

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Olá ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Nome:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;