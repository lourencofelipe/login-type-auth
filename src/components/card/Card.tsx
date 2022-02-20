import styled from 'styled-components';

export const Card = styled.div`
    
    background-color: #FFFFFF;
    border-radius: var(--border-radius);

    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 50vw;
        height: 57vh;
    }

     @media screen and (min-width: 1024px) {
        width: 45vw;
        height: 58vh;
    } 

    @media screen and (max-width: 440px){
        width: 81vw;
        height: 71vh;
    }  
   
    @media screen and (min-width: 441px) and (max-width: 768px) {
        width: 67vw;
        height: 61vh;
    } 
`;