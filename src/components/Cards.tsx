import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface Post {
    title: string,
    description: string,
    id: string
}

const Grow = keyframes`
from{
    transform: scale(0,0);
}to{
    transform: scale(1,1);
}
`;


const SCards: any = styled.div`
    animation: ${Grow} 500ms;
    animation-delay: ${props => ((Math.random() * 5) * 50)}ms;
    animation-fill-mode:backwards;
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



const Cards: React.FC<Post> = ({ title, description }) => {
    return (
        <SCards>
            <h3>{title}</h3>
            <p>{description.slice(0, 140) + " ..."}</p>
        </SCards>
    )
}

export default Cards;