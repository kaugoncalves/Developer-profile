import React from 'react'
import styled from 'styled-components'
import '../../App.css'

import { Github } from '@styled-icons/boxicons-logos/Github'
import { WalletFilled, BugFilled, Html5Outlined, FrownOutlined } from '@ant-design/icons'

export const CardsBottom = (props) => {

  const login = props.login;
  const proj = props.nameRepos;

  const CardLayout = styled.div`
    justify-content: center;
    display:flex;
    flex-direction: row;
    padding-bottom: 12.5%;
    margin-right:2rem;
    margin-left:5rem;
    height:12rem;
    `
  const CardArea = styled.div`
    height: 13rem;
    width: 11rem;
    align-items: center;
    justify-content: center;
    display: flex; 
    margin-right:2rem;
    margin-left:1rem;
    `

  const ContentCard = styled.div`
    align-items: center;
    justify-content: center;
    display: flex; 
    flex-direction: column;
    color:white;
    `



  const FlipCardProject = () => {

    return <CardArea>
      <div class="flip-card ">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <ContentCard><BugFilled style={{ fontSize: '250%', color: 'white' }} /> Projeto mais famoso </ContentCard>
          </div>
          <div class="flip-card-back">
            <h2>{props.nameRepos}</h2>
            <p style={{ fontSize: '100%' }}>Total de estrelas: <b> {props.starsRepos}⭐</b></p>
            <a href={`https://github.com/${login}/${proj}`}>  <button class="button" type='primary'> <Github style={{ width: '20%' }} /> Ver no Github </button> </a>
          </div>
        </div>
      </div>
    </CardArea>

  }

  const FlipCardCompany = () => {

    return <CardArea>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <ContentCard> <WalletFilled style={{ fontSize: '250%', color: 'white' }} />  Companhia  </ContentCard>
          </div>
          <div class="flip-card-back">
            <h1>Onde trabalha</h1>
            <h2 style={{ fontSize: '100%' }}>  {props.company ? props.company : <b>Nada por aqui <FrownOutlined style={{ fontSize: '100%' }} /></b>} </h2>
          </div>
        </div>
      </div>
    </CardArea>

  }

  const FlipCardLinguagem = () => {

    return <CardArea>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <ContentCard> <Html5Outlined style={{ fontSize: '250%', color: 'white' }} /> Liguagem mais usada  </ContentCard>
          </div>
          <div class="flip-card-back">
            <h2 >Linguagem mais usada</h2>
            <h2 style={{ fontSize: '150%' }}> {props.linguagemMaisUsada} </h2>
          </div>
        </div>
      </div>
    </CardArea>

  }


  return <CardLayout>

    {props.repositorios ? (FlipCardProject()) : (<CardArea>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <ContentCard> <Html5Outlined style={{ fontSize: '250%', color: 'white' }} /> Liguagem mais usada  </ContentCard>
          </div>
          <div class="flip-card-back">
            <h1><b>Nada por aqui <FrownOutlined style={{ fontSize: '20px' }} /></b></h1>
          </div>
        </div>
      </div>
    </CardArea>)}


    {props.repositorios ? (FlipCardLinguagem()) : (<CardArea>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <ContentCard> <Html5Outlined style={{ fontSize: '250%', color: 'white' }} /> Liguagem mais usada  </ContentCard>
          </div>
          <div class="flip-card-back">
            <h1><b>Nada por aqui <FrownOutlined style={{ fontSize: '20px' }} /></b></h1>
          </div>
        </div>
      </div>
    </CardArea>)}


    {FlipCardCompany()}

  </CardLayout>
}