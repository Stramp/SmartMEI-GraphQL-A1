import React from 'react';
import styled from 'styled-components';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/globalStyles';

const SApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100vh;
`;


function App() {


  return (
    <SApp>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </SApp>
  );
}

export default App;
