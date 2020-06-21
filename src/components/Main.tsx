import React from 'react';
import styled from 'styled-components';
import Posts, { Post } from './Posts';
import Pagination from './Pagination';


const StyledMain = styled.main`
    width: 90%;
    max-width: 1100px;
    margin: 0px auto 25px auto;
    padding:25px 0px 25px 0px;
    display: flex;
    align-items: center;
    flex-direction:column;
  
    
`;

const arrPosts: Post[] = [
    {
        title: "tittulo1",
        description: "descrição1",
        id: "4654564"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    },
    {
        title: "tittulo2",
        description: "descrição2",
        id: "876132"
    },
    {
        title: "tittulo3",
        description: "descrição3",
        id: "746518"
    },
    {
        title: "tittulo4",
        description: "descrição4",
        id: "74651458"
    }
]


function paginar() {
    console.log("Paginando")
}

const Main = () => (
    <StyledMain>
        <h1>Vagas</h1>
        <Posts posts={arrPosts.slice(0, 10)} loading={false} />
        <Pagination postsPerPage="10" totalPosts={arrPosts.length} paginate={paginar} />
    </StyledMain>
)

export default Main;