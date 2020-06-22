import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';



const StyledHeader = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    justify-content: center;
    width: 100%;
    height:80px;
    align-self: center;
    padding: 10px 0 13px 0;
    box-shadow: 2px 3px 4px #777575;
`;

const SImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;


const Header = () => {
    return (
        <StyledHeader>
            <SImg src={logo} />
        </StyledHeader>
    )
}


export default Header;