import React from 'react';
import styled from 'styled-components';

import Main from '../components/Main';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';




// estilizando div container geral

const SHome = styled.div`
    background            : url(${({ theme }) => theme.bgImg});
    color: ${({ theme }) => theme.txtColor};
    font-family: "Roboto", Helvetica, sans-serif, arial;
    font-weight:300;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
`;




// definindo conteudo dinamico para os cards

const Home = () => {
    return (
        //verificando entrada de Modal PopUp atraves da variavel popModal do tipo boolean
        <SHome>

            <Header />
            <Main />

            <Footer />
        </SHome >
    );
}

export default Home;