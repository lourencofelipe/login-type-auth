import styled from 'styled-components';

export const Main = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    /* background-color: #1e90ff; */
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

   
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;
 