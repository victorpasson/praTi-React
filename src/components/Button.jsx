import styled from "styled-components";

const CButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({type, children, ...props}) => {
    return(
        <CButton 
          type={type} 
          {...props}>{children}</CButton>
    )
}

export default Button;