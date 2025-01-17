import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'


import { Informations } from '../../Components/Informations/Informations'
import { CardsBottom } from '../../Components/Cards/CardsBottom'
import { CardsTop } from '../../Components/Cards/CardsTop'
import imgGif from '../../Assets/LoadingGif.gif'
import "../../App.css";


export const Layout = () => {
    const [userData, setUserData] = useState({});
    const [projPrincipal, setPrincipalProj] = useState(0);
    const [userRepos, setUserRepos] = useState(0);
    const [userLanguage, setLanguageRepos] = useState(0);
    const [userName, setUserName] = useState("");


    useEffect(() => {   
        if(userName){
            getUserData();
            getUserRepos();
        }
    }, [userName]);

    useEffect(() => {
        getUserName();
    }, []);

    useEffect(() => {   
        getStarsRepos();
        getLanguageRepos();
    }, [userRepos]);


    function getUserName(){
        var user;
        var hasClosed = false;

        while(user === null || user === undefined)
        {
            user = prompt('Digite seu login do Github', 'kaugoncalves')
            setUserName(user);
            console.log(userName);
            hasClosed=true;
        }
    }


    async function getUserData() {

        await axios.get(`https://api.github.com/users/${userName}`) //<<<<<<< CASO QUEIRA MUDAR O USER, COLOQUE O LOGIN AQUI E LA EM BAIXO
            .then(function (response) {
                setUserData(response.data);
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    const getUserRepos = () => {

        axios.get(`https://api.github.com/users/${userName}/repos`) //<<<<<<< CASO QUEIRA MUDAR O USER, COLOQUE O LOGIN AQUI E LA EM CIMA
            .then(function (response) {
                setUserRepos(response.data);
                
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    function getStarsRepos() { //pegando projeto com maior número de estrelas
        var maior = -1;

        for (var i = 0; i < userRepos.length; i++)
            if (userRepos[i].stargazers_count > maior) {
                maior = userRepos[i].stargazers_count;
                setPrincipalProj(userRepos[i]);
            }
    }

    function getLanguageRepos() { //pegando a linguagem mais usada
        var languages = [];
        var repeticoes = 0;
        var maiorLanguage = -1;


        for (var i = 0; i < userRepos.length; i++) {
            languages[i] = userRepos[i].language
        }


        for (i = 0; i < languages.length; i++) {
            for (var j = 0; j < languages.length; j++) {

                if (i === j) //pula caso seja ele mesmo
                    j++;

                if (languages[i] === languages[j] && languages[i] !== null) //ele nao verifica caso a language seja null
                    repeticoes++;
            }

            if (repeticoes > maiorLanguage) //se o numero de repeticoes for maior que a variavel maior, ele recebe o novo valor
            {
                setLanguageRepos(userRepos[i].language)
                maiorLanguage = repeticoes;
            }
            repeticoes = 0;
        }
    }

    

    const Structure = styled.div`
    display: grid;
    place-items: center;
    background: linear-gradient(to right top,#5f3185 0%, #0b1d49 100%);
    max-width: 100%;
    max-height: 100%;
    height:100vh;
    width:100%;
    background-color:red;
    `

    const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
    height:30%;
    width:30%;
    max-width: 100%;
    max-height: 100%;
    color: white;
    `

    const Coluna1 = styled.div`
    display: flex;
    flex-direction: column;
    `

    const Coluna2 = styled.div`
    display: flex;
    flex-direction: column;
    `

    return userData && userRepos && userName ? (
        <Structure>

            <Profile>
                <Coluna1>
                    <Informations
                        login={userData.login}
                        bio={userData.bio}
                        endereco={userData.location}
                        name={userData.name}
                        email={userData.email}
                        avatar={userData.avatar_url}>
                    </Informations>

                </Coluna1>

                <Coluna2>

                    <CardsTop
                        login={userData.login}
                        repositorios={userData.public_repos}
                        seguindo={userData.following}
                        seguidores={userData.followers}>
                    </CardsTop>

                    <CardsBottom
                        linguagemMaisUsada={userLanguage}
                        repositorios={userData.public_repos}
                        login={userData.login}
                        company={userData.company}
                        nameRepos={projPrincipal.name}
                        starsRepos={projPrincipal.stargazers_count} >
                    </CardsBottom>

                </Coluna2>

            </Profile>
        </Structure>) :

        <img
            style={{ paddingLeft: '40%', paddingTop: '15%' }}
            src={imgGif}
            alt="loading..."
        />
}