import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';


const StyledMain = styled.main`
    width: 90%;
    max-width: 1100px;
    margin: 0px auto 25px auto;
    padding:25px 0px 25px 0px;
    display: flex;
    align-items: center;
    flex-direction:column;
  
    
`;
const SCards = styled.main`
    width: 90%;
    max-width: 1100px;
    padding:25px 0px 25px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 20px;
    
`;

const Main = () => (
    <StyledMain>
        <h1>Vagas</h1>
        <SCards>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </SCards>
    </StyledMain>
)

export default Main;