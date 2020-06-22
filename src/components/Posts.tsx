import React, { useState } from 'react';
import Post, { TypePost } from './Cards';
import styled from 'styled-components';
import Pagination from './Pagination';
import Modal from './Modal';
import ModalProvider from '../context/modalContext';

export interface TypePosts {
    posts: TypePost[]
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

const Posts: React.FC<TypePosts> = ({ posts }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginar = (pageNumber: number) => setCurrentPage(pageNumber);



    return (
        <ModalProvider>
            <Modal />
            <SCards>
                {currentPosts.map(({ id, title, description, tags, company, slug }) => (
                    <Post
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        tags={tags}
                        slug={slug}
                        company={company} />
                ))}

            </SCards>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setPage={paginar} currentPage={currentPage} />
        </ModalProvider>
    );
};

export default Posts;

