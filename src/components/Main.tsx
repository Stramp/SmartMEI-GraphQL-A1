import React, { useState, useEffect } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';
import Posts from './Posts';



const StyledMain = styled.main`
    width: 90%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    flex-direction:column;
    margin:15px;
`;


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



const Main: React.FC<any> = (props) => {
    const [posts, setPosts] = useState([]);
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