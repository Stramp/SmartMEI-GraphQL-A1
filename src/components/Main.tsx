import React from 'react';
import styled from 'styled-components';
import Posts from './Posts';



const StyledMain = styled.main`
    width: 90%;
    max-width: 1100px;
    margin: 0px auto 25px auto;
    padding:25px 0px 25px 0px;
    display: flex;
    align-items: center;
    flex-direction:column;
  
    
`;

const arrPosts = [
    {
        title: "tittulo1",
        description: "descrição1",
        id: "46545123164"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "8768768132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "7461231518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "746234251458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "875234526132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "7467868518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "7465145978978"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "34242"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "0980890"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "12312"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "98709"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "5364563"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "79595679"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "57996"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "6785"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "99"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "9976"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "76876"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "746587691458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "2342"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "5345345"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "7435"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "345"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "6547"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "125"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "3232"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "7443436518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "1231231"
    }
]




const Main = () => (
    <StyledMain>
        <h1>Vagas</h1>
        <Posts posts={arrPosts} loading={false} postsPerPage="10" />

    </StyledMain>
)

export default Main;