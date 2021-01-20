import React from 'react'
import styled from 'styled-components'
import '../../App.css'

import { FlagFilled, PushpinFilled, BookFilled, FrownOutlined } from '@ant-design/icons'
import CountTo from 'react-count-to';
import { Github } from '@styled-icons/boxicons-logos/Github'

export const CardsTop = (props) => {


  const loginUsua = props.login

  const InformationLayout = styled.div`
    justify-content: center;
    display:flex;
    flex-direction: row;
    padding-bottom: 8%;
    margin-right:2rem;
    margin-left:5rem;
    `

  const Columns = styled.div`
    height: 13rem;
    width: 11rem;
    align-items: center;
    justify-content: center;
    display: flex; 
    margin-right:2rem;
    margin-left:1rem;
    margin-top:6rem;
    `
  const Content = styled.div`
    align-items: center;
    justify-content: center;
    display: flex; 
    flex-direction: column;
    color:white;
    `

  const FlipCardSeguidores = () => {

    return <Columns style={{ backgroundColor: 'rgb(37, 37, 37)' }}>

      <Content>
        <PushpinFilled style={{ fontSize: '250%' }} /> Seguidores:
      <div style={{ fontSize: '40px', margin: '5px' }}>
          <CountTo to={props.seguidores} speed={1200} />
        </div>
      </Content>
    </Columns>

  }

  const FlipCardSeguindo = () => {

    return <Columns style={{ backgroundColor: 'rgb(37, 37, 37)' }}>
      <Content>
        <FlagFilled style={{ fontSize: '250%' }} />  Seguindo:
        <div style={{ fontSize: '40px', margin: '5px' }}> <CountTo to={props.seguindo} speed={1200} />
        </div>
      </Content>
    </Columns>

  }

  const FlipCardRepositorios = () => {

    return <Columns>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <Content> <BookFilled style={{ fontSize: '250%' }} />  Repositórios: <div style={{ fontSize: '40px', margin: '5px' }}> <CountTo start={0} to={props.repositorios ? props.repositorios : <b>Nada por aqui <FrownOutlined style={{ fontSize: '20px' }} /></b>} speed={1200} />  </div> </Content>
          </div>
          <div class="flip-card-back">
            <h2>Repositórios públicos</h2>
            <h2> {props.repositorios ? props.repositorios : 0} ao todo📝</h2>
            <a href={`https://github.com/${loginUsua}?tab=repositories`}> <button class="button" type='primary'>
              <Github style={{ width: '20%' }} /> Ver no Github </button>
            </a>
          </div>
        </div>
      </div>
    </Columns>
  }



  return <InformationLayout>

    {FlipCardSeguidores()}

    {FlipCardRepositorios()}

    {FlipCardSeguindo()}

  </InformationLayout>

}