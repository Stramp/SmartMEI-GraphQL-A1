import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useModal } from '../context/modalContext'



export interface TypePost {
    title: string,
    description: string,
    id: string,
    slug: string,
    tags: [{ name: string }],
    company: {
        name: string,
        slug: string
    }
}

const Grow = keyframes`
from{
        transform: scale(0.9,0.9);
    opacity:0.3;
}to{
        transform: scale(1,1);
    opacity:1;
}
`;


const SCards: any = styled.div`
    animation: ${Grow} 500ms;
    animation-delay: ${props => ((Math.random() * 5) * 50)}ms;
    animation-fill-mode:backwards;
    min-width: 250px;
    background:#fff;
    min-height: 125px;
    border-bottom: solid 1px #000;
    padding: 10px;
    box-shadow: 2px 3px 4px #777575;
    transition: all 0.3s ease 0s;
    &&:hover{
        cursor:pointer;
        box-shadow: 6px 7px 5px #777575;


    }
`;

const SH3 = styled.h3`
font-size:1.4rem;
padding-left:10px;
`;
const SH5 = styled.h5`
font-size:1.2rem;
padding-left:10px;
margin-bottom:5px;
color:#afafaf;
`;
const SP = styled.p`
font-size:1.2rem;
margin-bottom:10px;
`;





const Post: React.FC<TypePost> = ({ title, description, company, tags, slug }) => {
    const { modalVisible, setModalVisible, setModalItem } = useModal();

    function handClick() {
        setModalVisible(!modalVisible);
        setModalItem({ company, slug });
        console.log('click:>', { company, slug })
    }

    return (
        <>

            <SCards onClick={handClick}>
                <SH3>{title}</SH3>
                <SH5>{company.name}</SH5>
                <SP>{description.slice(0, 140)} ...<b>Read More</b></SP>
                <code>{tags.map(tag => ' #' + tag.name.replace(' ', ''))}</code>
            </SCards>
        </>
    )
}

export default Post;