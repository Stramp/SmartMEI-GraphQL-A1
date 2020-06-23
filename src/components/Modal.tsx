import React from 'react';
import styled from 'styled-components';
import { TypePost } from './Cards';
import { useModal } from '../context/modalContext'

import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

interface TypeModal {
    item: TypePost
}

const StyledModal = styled.div`
  background: #000000d6;
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
    background:#fff;
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


const jobInfo = gql`
 query jobi($cs:String!, $s:String!) {
        job(input:{
            companySlug:$cs,
            jobSlug:$s
        }){
            id title
            company{
            name
            }
        }
}
`;






const Modal: React.FC = () => {
    const { modalVisible, setModalVisible, modalItem } = useModal();



    const ModalEstructure: React.FC = () => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", modalItem.company.slug);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", modalItem.slug);



        const { data, loading } = useQuery(jobInfo, {
            variables: {

                "cs": "close",
                "s": "senior-software-engineer-backend"

            }
        });


        console.log("******", data)
        return (

            <StyledModal onClick={() => setModalVisible(!modalVisible)}>
                < SBox >
                    {loading ? <h1>LOADING...</h1> : modalItem.slug}
                </SBox >
            </StyledModal >
        )
    }

    return (
        <>
            {modalVisible ? <ModalEstructure /> : null}
        </>
    )
}

export default Modal;