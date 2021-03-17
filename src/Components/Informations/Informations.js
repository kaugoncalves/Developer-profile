import React from 'react'
import styled from 'styled-components'

import { MailFilled, InfoCircleFilled, FrownOutlined, HomeFilled } from '@ant-design/icons'

export const Informations = (props) => {

    const InformationsLayout = styled.div`
    display:flex; 
    flex-direction: column; 
    justify-content: center;
    background-color: rgb(37, 37, 37);
    padding: 1rem 1rem;
    box-shadow: -1px 4px 20px -6px black;
    min-width:26rem;
    max-width:26rem;
    min-height:30.2rem;
    max-height:30.2rem;
    `

    const ImgLayout = styled.div`
    justify-content: center;
    display:flex;
    `

    const NameDiv = styled.div`
    justify-content: center;
    display:flex;
    `

    const IdDiv = styled.div`
    justify-content: center;
    display:flex;
    color: rgba(255, 255, 255, 0.600);
    `

    const BioDiv = styled.div`
    padding-top:5%;
    
    `
    const EmailDiv = styled.div`
    padding-top:2%;
    `

    const EnderecoDiv = styled.div`
    padding-top:2%;
    `

    return (
        <>
            <InformationsLayout>

                <ImgLayout>
                    <img src={props.avatar} style={{ borderRadius: '50%', width: '300px', boxShadow: '-1px 4px 20px -6px black' }} />
                </ImgLayout>

                <NameDiv> {props.name}  </NameDiv>
                <IdDiv>  @{props.login}  </IdDiv>
                <br />

                <BioDiv>  <b>
                    <InfoCircleFilled /> Bio:
                    </b> {props.bio ? props.bio :
                        <b>Nada por aqui <FrownOutlined style={{ fontSize: '20px' }} /></b>}
                </BioDiv>

                <EmailDiv>  <b>
                    <MailFilled style={{ fontSize: '20px' }} /> Email:
                    </b>
                    {props.email ? props.email :
                        <b> Nada por aqui <FrownOutlined style={{ fontSize: '20px' }} /></b>}
                </EmailDiv>

                <EnderecoDiv> <b>
                    <HomeFilled style={{ fontSize: '20px' }} /> Localização:
                    </b> {props.endereco ? props.endereco :
                        <b>Nada por aqui <FrownOutlined style={{ fontSize: '20px' }} /></b>}
                </EnderecoDiv>

            </InformationsLayout>
        </>
    )

}