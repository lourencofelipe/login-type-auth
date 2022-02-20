import styled from 'styled-components';

export const Main = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: #1e90ff;

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;
 