import React, { useState, useEffect } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';
import Posts from './Posts';



const StyledMain = styled.main`
    width: 90%;
    max-width: 1100px;
    margin: 0px auto 25px auto;
    padding:25px 0px 25px 0px;
    display: flex;
    align-items: center;
    justify-content: inherit;
    height: 100%;
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
        title: "tittulo5",
        description: "descrição2",
        id: "875234526132"
    },
    {
        title: "tittulo6",
        description: "descrição3",
        id: "7467868518"
    },
    {
        title: "tittulo7",
        description: "descrição4",
        id: "7465145978978"
    },
    {
        title: "tittulo8",
        description: "descrição2",
        id: "34242"
    },
    {
        title: "tittulo9",
        description: "descrição3",
        id: "0980890"
    },
    {
        title: "tittulo10",
        description: "descrição4",
        id: "12312"
    },
    {
        title: "tittulo11",
        description: "descrição2",
        id: "98709"
    },
    {
        title: "tittulo12",
        description: "descrição3",
        id: "5364563"
    },
    {
        title: "tittulo13",
        description: "descrição4",
        id: "79595679"
    },
    {
        title: "tittulo14",
        description: "descrição2",
        id: "57996"
    },
    {
        title: "tittulo15",
        description: "descrição3",
        id: "6785"
    },
    {
        title: "tittulo16",
        description: "descrição4",
        id: "99"
    },
    {
        title: "tittulo17",
        description: "descrição2",
        id: "9976"
    },
    {
        title: "tittulo18",
        description: "descrição3",
        id: "76876"
    },
    {
        title: "tittulo19",
        description: "descrição4",
        id: "746587691458"
    },
    {
        title: "tittulo20",
        description: "descrição2",
        id: "2342"
    },
    {
        title: "tittulo21",
        description: "descrição3",
        id: "5345345"
    },
    {
        title: "tittulo22",
        description: "descrição4",
        id: "7435"
    },
    {
        title: "tittulo23",
        description: "descrição2",
        id: "345"
    },
    {
        title: "tittulo24",
        description: "descrição3",
        id: "6547"
    },
    {
        title: "tittulo25",
        description: "descrição4",
        id: "125"
    },
    {
        title: "tittulo26",
        description: "descrição2",
        id: "3232"
    },
    {
        title: "tittulo27",
        description: "descrição3",
        id: "7443436518"
    },
    {
        title: "tittulo28",
        description: "descrição4",
        id: "1231231"
    }
]

const AllPosts = gql`
    query{

        jobs{
            id title slug description 
            tags{
            name
            }
        }
    }
`;

interface CallPosts {

    todosPosts: {
        loading: boolean,
        jobs: {
        }
    }
}

const Main: React.FC<any> = (props) => {
    const [posts, setPosts] = useState(arrPosts);
    const loading = props.todosPosts.loading;
    useEffect(() => {
        setPosts(loading ? [] : props.todosPosts.jobs);
    }, [loading]);


    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <StyledMain>
            <h1>Vagas</h1>
            <Posts posts={posts} />
        </StyledMain>
    )
}

export default graphql(AllPosts, { name: 'todosPosts' })(Main);