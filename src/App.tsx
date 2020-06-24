import React from 'react';
import styled from 'styled-components';

import { ApolloProvider } from 'react-apollo';
import aClient from './services/apollo'

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/globalStyles';

const SApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    height:100vh;
    @media (max-width: 748px){
        height:auto;
    }
    @media (max-height: 863px){
        height:auto;
    }
`;


function App() {


  return (
    <ApolloProvider client={aClient}>
      <SApp>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </SApp>
    </ApolloProvider>
  );
}

export default App;
