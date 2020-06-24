import React from 'react';
import styled from 'styled-components';
import { TypePost } from './Cards';
import { useModal } from '../context/modalContext'
import Box from './BoxModal';

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
`;

const HitBox = styled.div`
  
   position: fixed;
    top: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
`



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
        console.log('data > ', !loading ? data : 'veio nada');
        console.table(!loading ? data.job : 'veio nada');
        return (

            <StyledModal>

                {loading ? <h1>LOADING...</h1> : <Box job={data.job} />}
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