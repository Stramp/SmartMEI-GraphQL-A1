import React from 'react';
import styled from 'styled-components';
import { TypePost } from './Cards';
import { useModal } from '../context/modalContext'
import Box from './BoxModal';

import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

import ImgLoadingWhite from '../assets/loading_white.svg'
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
`;

const HitBox = styled.div`
  
   position: fixed;
    top: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
`
const SImg = styled.img`
    max-width: 100%;
`;
const SH1 = styled.h1`
font-size: 1.2rem;
padding-left: 10px;
margin-top: 5px;
margin-bottom: 10px;
color:#fff;
`;

const jobInfo = gql`
query jobI($companySlug:String!, $jobSlug:String!){
  job(input:{
    companySlug:$companySlug,
    jobSlug:$jobSlug
  }){
    id title description postedAt
    commitment{
      title 
    }   
    tags{
      name
    }
    company{
      name websiteUrl 
    }
    
  }
}

`;






const Modal: React.FC = () => {
  const { modalVisible, setModalVisible, modalItem } = useModal();

  const ModalEstructure: React.FC = () => {

    const { data, loading } = useQuery(jobInfo, {
      variables: {

        "companySlug": modalItem.company.slug,
        "jobSlug": modalItem.slug

      }
    });
    console.log('data > ', !loading ? data : 'error');

    return (

      <StyledModal>

        {loading ? <div><SImg src={ImgLoadingWhite} /><SH1>LOADING...</SH1></div> : <Box job={data.job} />}
        <HitBox onClick={() => setModalVisible(!modalVisible)} />
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