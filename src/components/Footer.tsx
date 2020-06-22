import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    border-top: 0.5px solid ${({ theme }) => theme.borderColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    align-self: center;
    padding: 10px 0 10px 0;
    box-shadow: 2px 0px 4px #777575;
    
    @media(max-width:743px){
        flex-direction:column-reverse;
        text-align: center;
    }
`;

const SP = styled.p`
    font-size:1.2rem;
    font-weight:400;    
`;



const Footer = () => (
    <StyledFooter>
        <SP>SmartMEI 2020 Todos direitos reservados</SP>

    </StyledFooter>
)

export default Footer;