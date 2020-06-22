import React from 'react';
import styled from 'styled-components';

export interface Indice {
    postsPerPage: number,
    totalPosts: number,
}

const SNav = styled.nav`
    
`;
const SUl = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:row;
   
`;

const SLi = styled.li` 
`;
const SA = styled.a` 
text-decoration:none;
padding:2px;
margin:1px;
box-shadow: 2px 3px 4px #777575;
border-bottom: solid 1px #000;
font-size:1.2rem;
`;





const Pagination: React.FC<Indice> = ({ postsPerPage, totalPosts }) => {
    const pageNumbers = [];
    console.log(">>>2>>>", postsPerPage, "<<<<<2<<<", totalPosts)

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(">>>>>>", pageNumbers, "<<<<<<<<")
    return (
        <SNav>
            <SUl >
                {pageNumbers.map(number => (
                    <SLi key={number} >
                        <SA href='!#' >
                            {number}
                        </SA>
                    </SLi>
                ))}
            </SUl>
        </SNav>
    );
};

export default Pagination;