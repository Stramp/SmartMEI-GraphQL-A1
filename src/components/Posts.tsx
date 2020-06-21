import React from 'react';
import Cards from './Cards';
import styled from 'styled-components'

export interface Post {
    title: string,
    description: string,
    id: string
}



const SCards = styled.main`
    width: 90%;
    max-width: 1100px;
    padding:25px 0px 25px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 20px;
    
`;

const Posts = ({ posts, loading }: any) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <SCards>
            {posts.map((post: any) => (
                <Cards
                    key={post.id}
                    title={post.title}
                    description={post.description} />
            ))}
        </SCards>
    );
};

export default Posts;

