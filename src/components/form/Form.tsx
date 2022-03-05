import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: start;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
        width: 25vw;
    }
`
type FormProps = {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children: JSX.Element | JSX.Element[];
    style?: React.CSSProperties;
}

export const Form = ({ onSubmit, children, style }: FormProps) => (
    <FormStyled onSubmit={onSubmit} style={style}>{ children }</FormStyled>
)