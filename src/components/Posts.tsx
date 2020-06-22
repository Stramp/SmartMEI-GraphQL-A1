import React from 'react';
import Cards, { Post } from './Cards';
import styled from 'styled-components';
import Pagination from './Pagination';

export interface Posts {
    posts: Post[],
    loading: boolean,
    postsPerPage: number,
}


const SCards = styled.section`
    width: 90%;
    max-width: 1100px;
    padding:25px 0px 25px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
    grid-gap: 20px;
    @media(max-width:987px){
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
`;

const Posts: React.FC<Posts> = ({ posts, loading, postsPerPage }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <SCards>
                {posts.slice(0, postsPerPage).map((post: any) => (
                    <Cards
                        key={post.id}
                        title={post.title}
                        description={post.description} />
                ))}

            </SCards>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
        </>
    );
};

export default Posts;

