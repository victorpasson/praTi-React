import { useState } from "react";

const FormDesafio = () => {
    const [cadastro, setCadastro] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCadastro(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const regex = /^\S+@\S+\.\S+$/g;

        if(!cadastro.name || !cadastro.email || !cadastro.password || !cadastro.cpassword){
            alert("Preencha todos os campos antes de submeter.");
        } else if (cadastro.password.length < 8){
            alert("A senha precisa ter pelo menos 8 caracteres.");
        } else if (!(cadastro.password == cadastro.cpassword)){
            alert("As senhas não conferem");
        } else if( !cadastro.email.match(regex) ){
            alert("Digite um e-mail valido.")
        } else {
            alert(`Cadastro de ${cadastro.name} submetido.`);
            setCadastro(prev => ({
                ...prev,
                name: "",
                email: "",
                password: "",
                cpassword: ""
            }))
        }
    }
    return(
        <form action="" onSubmit={handleSubmit}>
            <h2>Registre-se</h2>
            <label>
                Nome Completo:<br/>
                <input type="text" name="name" value={cadastro.name} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                E-mail:<br/>
                <input type="email" name="email" value={cadastro.email} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Password:<br/>
                <input type="password" name="password" value={cadastro.password} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Confirmar Password:<br/>
                <input type="password" name="cpassword" value={cadastro.cpassword} onChange={handleChange}/>
            </label>
            <br/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormDesafio;