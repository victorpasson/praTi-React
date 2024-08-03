import { useState } from "react";
import styled from "styled-components";
import QRCode from "qrcode.react";

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

const QRContainer = styled.div`

`

const QRCodeGenerator = () => {
    const [text, setText] = useState("");

    return(
        <Container>
            <Title>QRCode Generator</Title>
            <Input type="text" value={text} onChange={event => setText(event.target.value)}/>

            {text && (
                <QRContainer>
                    <QRCode value={text} size={256}/>
                </QRContainer>
            )}
        </Container>
    )
}

export default QRCodeGenerator;