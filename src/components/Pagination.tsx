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
padding:5px 10px 5px 10px;
margin:5px;
box-shadow: 2px 3px 4px #777575;
color: #000;
border-bottom: solid 1px #000;
font-size:1.4rem;
background: ${props => Number(props.children) === Number(props.tabIndex) ? '#00000091' : null};
transition: all 0.3s ease 0s;
&&:hover{
        cursor:pointer;
        box-shadow: 6px 7px 5px #777575;
        
    }

`;





const Pagination: React.FC<Indice> = ({ postsPerPage, totalPosts, setPage, currentPage }) => {
    const [paginationInd, setPageInd] = useState(0);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const indexOfLastList = 10 + paginationInd;
    const indexOfFirstList = 0 + paginationInd;
    const currentList = pageNumbers.slice(indexOfFirstList, indexOfLastList);




    function handDownPageInd() {
        if (currentPage <= (indexOfFirstList + 2) && paginationInd >= 1) setPageInd(paginationInd - 1);
        setPage(currentPage - 1);
    }
    function handUpPageInd() {
        if (currentPage >= (indexOfLastList - 1)) setPageInd(paginationInd + 1)
        setPage(currentPage + 1);
    }

    return (
        <SNav>
            <SUl >
                {currentPage <= 1 ? null :
                    <SLi>
                        <SA onClick={handDownPageInd} href='!#'> {'<<'} </SA>
                        {paginationInd > 0 ? <span>...</span> : null}
                    </SLi>
                }

                {currentList.map(number => (
                    <SLi key={number} >
                        <SA onClick={(e) => setPage(number)} href='!#' tabIndex={currentPage} >
                            {number}
                        </SA>
                    </SLi>
                ))}


                {pageNumbers.length === currentPage ? null :
                    <SLi>
                        {pageNumbers.length >= indexOfLastList ? <span>...</span> : null}
                        <SA onClick={handUpPageInd} href='!#'> {'>>'} </SA>
                    </SLi>
                }

            </SUl>

        </SNav>
    );
};

export default Pagination;