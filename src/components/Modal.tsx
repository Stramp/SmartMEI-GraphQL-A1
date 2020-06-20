import React from 'react';
import styled from 'styled-components';


const StyledModal = styled.div`
  background: ${({ theme }) => theme.bgModalColor};
  position:fixed;
  top: 0px;
  bottom: 0px;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 999;
`
const SBox = styled.div`
    background: ${({ theme }) => theme.cardsBgTxtColor};
    border: 2px solid ${({ theme }) => theme.borderColor};
    border-radius:5px;
    width: 75vw;
    min-width: 400px;
    max-width: 900px;
    height: 60vh;
    display:flex;
    @media(max-width: 438px){
        min-width: 80%;
    }

`;






const Modal = () => (
    <StyledModal>

        <SBox>
        </SBox>


    </StyledModal>
)

export default Modal;