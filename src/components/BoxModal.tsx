import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useModal } from '../context/modalContext'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';


const Grow = keyframes`
from{
        transform: scale(0.9,0.9);
    opacity:0.3;
}to{
        transform: scale(1,1);
    opacity:1;
}
`

const SBox = styled.div`

background:#fff;
border: 2px solid #0f0f0f;
border-radius: 5px;
width: 75vw;
min-width: 400px;
max-width: 900px;
height: 60vh;
display: flex;
flex-direction:column;
animation: ${ Grow} 500ms;
animation-delay: ${ props => ((Math.random() * 5) * 50)} ms;
animation-fill-mode: backwards;
padding: 10px;
box-shadow: 2px 3px 4px #777575;
transition: all 0.3s ease 0s;
@media(max-width: 438px) {
    min-width: 80%;
}

`;
const STitle = styled.h1`
font-size: 1.4rem;
padding-left: 10px;
`;
const SH5 = styled.h5`
font-size: 1.2rem;
padding-left: 10px;
margin-top: 5px;
margin-bottom: 10px;
color:${props => props.color};
`;
const Subscribe = styled.h4`
font-size: 1.2rem;
padding-left: 10px;
margin-top: 25px;
margin-bottom: 10px;
color:${props => props.color};
`;
const SP = styled.p`
font-size: 1.2rem;
margin-bottom: 10px;
`;
const SBtn = styled.a`
    width:120px;
    padding:5px;
    margin:5px;
    border: solid 1px #0f0f0f;
    &&:hover{
        cursor:pointer;
        background:#00000091;
    }
`
const TextBox = styled.div`
    overflow:overlay;
    height:85%;
    padding:5px 25px 5px 5px;
    margin-bottom: 10px;
`
const ContainerData = styled.div`
    display:flex;
    height:100%;
    padding:5px;
`
const ContainerDescription = styled.div`
   height:100%;
    width:55%;
    margin:auto;
`
const ContainerNav = styled.div`
    display:flex;
    width:45%;
    flex-direction:column;    
    margin-left:25px;
`
const SNav = styled.nav`
  text-align: center;
`
const Scode = styled.div`
  font-family:'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New',
    monospace;
`
const SubTitle = styled.div`
  padding:5px;
  margin-bottom: 25px;
 
`

const bd = {
    user: {
        name: "rafael",
        email: "rafaelcostart2@gmail.com"
    }
}

interface TypeBoxModal {
    job: {
        title: string,
        description: string,
        postedAt: Date,
        commitment: {
            title: string
        },
        company: {
            name: string,
            websiteUrl: string
        },
        tags: {
            name: string
        }[]
    }
}

const MutationSub = gql`
    mutation Subscriber($name:String!, $email:String!){
        subscribe(input:{name:$name, email: $email}){
            subscribe 
        }
    }
`

const BoxModal: React.FC<TypeBoxModal> = ({ job }) => {
    const { modalVisible, setModalVisible } = useModal();
    const [reqSubs, { data, loading }] = useMutation(MutationSub);
    console.log('Status Subscribe>', Boolean(data) ? data.subscribe.subscribe : "error")
    const dat = new Date(job.postedAt);

    function handBtn() {
        reqSubs({
            variables: {
                "name": bd.user.name,
                "email": bd.user.email
            }
        })
    }
    return (
        <SBox>
            <STitle>{job.title}</STitle>
            <hr />
            <ContainerData>

                <ContainerDescription>

                    <SH5 color="#777575">Description</SH5>
                    <TextBox>
                        <SP>{job.description}</SP>
                    </TextBox>
                    <Scode>{job.tags.map(tag => ' #' + tag.name.replace(' ', ''))}</Scode>

                </ContainerDescription>
                <ContainerNav>
                    <SubTitle>
                        <SH5 color="#777575">Company: </SH5>
                        <SH5 color="#0f0f0f">{job.company.name}</SH5>
                        <Scode color="#0f0f0f">{job.company.websiteUrl}</Scode>
                    </SubTitle>
                    <SubTitle>
                        <SH5 color="#777575">Commitment: </SH5>
                        <SH5 color="#0f0f0f">{job.commitment.title}</SH5>
                    </SubTitle>
                    <SubTitle>
                        <SH5 color="#777575">Posted at: </SH5>
                        <Scode>{dat.toUTCString()}</Scode>
                    </SubTitle>


                    <SNav>
                        <SBtn type="subscribe" onClick={handBtn}>{!loading ? 'Subscribe' : 'Loading'}</SBtn>
                        <SBtn type="close" onClick={() => setModalVisible(!modalVisible)}>Close</SBtn>
                        <Subscribe color="#0f0f0f">{Boolean(data) ? data.subscribe.subscribe ? 'Successfully Subscribe' : 'Not subscribed' : null}</Subscribe>
                    </SNav>
                </ContainerNav>
            </ContainerData>
        </SBox>
    )
}

export default BoxModal;