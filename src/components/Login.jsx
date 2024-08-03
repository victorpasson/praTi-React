import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    max-width: 800px;
    margin: 20px auto;
`

const Title = styled.h2`
    color: #333;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
`

const Input = styled.input`
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    width: 100%;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`

const Button = styled.button`
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover{
        background-color: #0056b3;
    }
`

const Login = () => {
    const [user, setUser] = useState({
        login: "",
        password: ""
    })
    const [logado, setLogado] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClick = () => {
        setLogado(true);
    }

    return(
        <Container>
            <Title>Login</Title>
            <Input type="text" name="login" placeholder="Login" value={user.login} onChange={handleChange}/>
            <Input type="password" name="password" placeholder="Senha" value={user.password} onChange={handleChange}/>
            {logado && (<p>Usuário logado com sucesso!</p>)}
            <Button onClick={handleClick}>Logar</Button>
        </Container>
    )
}

export default Login;