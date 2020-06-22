import React, { useState } from 'react';
import styled from 'styled-components';

export interface Indice {
    postsPerPage: number,
    totalPosts: number,
    setPage: Function,
    currentPage: number
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
background: ${props => Number(props.children) === Number(props.tabIndex) ? '#00000091' : null};
`;





const Pagination: React.FC<Indice> = ({ postsPerPage, totalPosts, setPage, currentPage }) => {
    const [paginationInd, setPageInd] = useState(0);
    const pageNumbers = [];
    console.log(">>>2>>>", postsPerPage, "<<<<<2<<<", totalPosts)

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const indexOfLastList = 10 + paginationInd;
    const indexOfFirstList = 0 + paginationInd;
    const currentList = pageNumbers.slice(indexOfFirstList, indexOfLastList);



    console.log(">>>>>>", currentList, "<<<<<<<<")

    function handDownPageInd() {
        if (currentPage <= (indexOfFirstList + 2)) setPageInd(paginationInd - 1);
        setPage(currentPage - 1);
    }
    function handUpPageInd() {
        if (currentPage >= (indexOfLastList - 1)) setPageInd(paginationInd + 1)
        setPage(currentPage + 1);
    }

    return (
        <SNav>
            <SUl >
                {paginationInd > 0 ? <SLi> <SA onClick={handDownPageInd} href='!#'>  {'<<'}... </SA> </SLi> : null}
                {currentList.map(number => (
                    <SLi key={number} >
                        <SA onClick={(e) => setPage(number)} href='!#' tabIndex={currentPage} >
                            {number}
                        </SA>
                    </SLi>
                ))}
                {pageNumbers.length >= indexOfLastList ? <SLi> <SA onClick={handUpPageInd} href='!#'> ...{'>>'} </SA> </SLi> : null}
            </SUl>

        </SNav>
    );
};

export default Pagination;