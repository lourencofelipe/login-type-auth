import styled from 'styled-components';

const ButtonStyled = styled.input`
  background-color: #1e90ff;
  margin-top: 3rem;
  width: 100%; 
  padding: 1.3rem;
  font-size: 100%;
  font-weight: 500;
  cursor: pointer;
`
type ButtonProps = {    
  type: 'submit';
  children?: React.ReactNode; 

}

export const Button = ({ type, children }: ButtonProps) => {
  <ButtonStyled type={type}>{children}</ButtonStyled>
}