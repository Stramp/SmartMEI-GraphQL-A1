import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
    const pageNumbers = [];
    console.log(">>>2>>>", postsPerPage, "<<<<<2<<<", totalPosts)

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(">>>>>>", pageNumbers, "<<<<<<<<")
    return (
        <nav>
            <ul >
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;