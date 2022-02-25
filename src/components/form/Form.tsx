import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: start;
    flex-direction: column;
`
type FormProps = {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children:  JSX.Element | JSX.Element[];
}

export const Form = ({ onSubmit, children }: FormProps) => (
    <FormStyled onSubmit={onSubmit}>{ children }</FormStyled>
)