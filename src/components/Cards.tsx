import React from 'react';
import styled from 'styled-components';


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



const Cards = () => {

    return (
        <SCards>
            <h3>Card1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus dolores quod commodi eligendi odio vitae recusandae ex veritatis esse ipsa soluta ullam iste exercitationem quibusdam, tempore quisquam enim asperiores.</p>
        </SCards>
    )
}

export default Cards;