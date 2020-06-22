import React, { useState } from 'react';
import Cards, { Post } from './Cards';
import styled from 'styled-components';
import Pagination from './Pagination';

export interface Posts {
    posts: Post[],

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

const Posts: React.FC<Posts> = ({ posts }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginar = (pageNumber: number) => setCurrentPage(pageNumber);



    return (
        <>
            <SCards>
                {currentPosts.map((post: Post) => (
                    <Cards
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description} />
                ))}

            </SCards>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setPage={paginar} />
        </>
    );
};

export default Posts;

