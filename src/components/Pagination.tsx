import React from 'react';
import styled from 'styled-components';

export interface Indice {
    postsPerPage: number,
    totalPosts: number,
    setPage: Function
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
padding:3px;
margin:2px;
box-shadow: 2px 3px 4px #777575;
font-weight: 600;
color: #000;
border-bottom: solid 1px #000;
font-size:1.3rem;
`;





const Pagination: React.FC<Indice> = ({ postsPerPage, totalPosts, setPage }) => {
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
                        <SA onClick={() => setPage(number)} href='!#' >
                            {number}
                        </SA>

                    </SLi>
                ))}
            </SUl>

        </SNav>
    );
};

export default Pagination;