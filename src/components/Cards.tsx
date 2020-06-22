import React from 'react';
import styled from 'styled-components';

export interface Post {
    title: string,
    description: string
}


const SCards = styled.div`
    min-width: 250px;
    background:#fff;
    min-height: 100px;
    border-bottom: solid 1px #000;
    padding: 10px;
    box-shadow: 2px 3px 4px #777575;
    transition: all 0.3s ease 0s;
    &&:hover{
        cursor:pointer;
        box-shadow: 4px 5px 5px #777575;
        transform:scale(1.05,1.05);
        
    }
`;



const Cards = ({ title, description }: any) => {

    return (
        <SCards>
            <h3>{title}</h3>
            <p>{description}</p>
        </SCards>
    )
}

export default Cards;