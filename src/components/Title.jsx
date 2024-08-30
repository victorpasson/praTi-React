import styled from "styled-components"

const H2 = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const Title = ({children}) => {
    return(
        <H2>
            {children}
        </H2>
    )
}

export default Title;