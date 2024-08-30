import styled from "styled-components";

// Define o estilo do campo de entrada
const CInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;


const Input = ({value, handleChange, type, placeholder, error, ...props}) => {
  return (
    <>
        <CInput
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            {...props}
        />
        {error && <p>{error}</p>}
    </>
  )
}

export default Input;