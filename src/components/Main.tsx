import React from 'react';
import { useQuery } from "@apollo/react-hooks";

import gql from 'graphql-tag';

import styled from 'styled-components';
import Posts from './Posts';

import ImgLoading from '../assets/loading.svg'



const SImg = styled.img`
    max-width: 100%;
`;


const StyledMain = styled.main`
    width: 90%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 100%;
    flex-direction:column;
    margin:15px;
    
`;



const AllPosts = gql`
    query{

        jobs{
            id title slug description 
            company{
              name
              slug
            }
            tags{
            name
            }
        }
    }
`;



const Main: React.FC = () => {
    const { data, loading } = useQuery(AllPosts);

    console.log("Query AllPosts >>", loading, data)

    if (loading && !Boolean(data)) {
        return (
            <div>
                <SImg src={ImgLoading} />
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <StyledMain>
            <h1>Vagas</h1>
            <Posts posts={data.jobs} />
        </StyledMain>
    )
}

export default Main;