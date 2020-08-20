import React from "react"
import Image from "../img/Image.jpg";
import styled from "styled-components";
import Carrinho from "../img/carrinho.png"
import Card from "./Card"
const ImagemCarrinho = styled.img`
width:60px;

`
const BotaoCarrinho = styled.button`
float: right;
margin-right:2vw;
border-radius:50%;
width: 100px;
height: 100px;
border:1px solid black;
margin: 2vh 5vw 5vh 0;
margin-top: 2vh;
`
const Body = styled.body`
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
`
const TelaInteira = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 
`
const Main = styled.main`
    min-height: 80%;
    display: flex; 
`
const Nav = styled.nav`
border:1px solid black;
box-shadow:2px 2px black;
margin-left:10px;
text-align:center;
width:300px
`
const Section = styled.section`
   padding-left: 20px;
    padding-top: 20px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: (1fr, 1fr, 1fr, 1fr);
 margin:2vw; 
`


const Painel1 = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
    border: 1px dotted rgb(53, 53, 53);
    margin:0 0 2vw 2vh;
    text-align:center
`
const Painel2 = styled.div`
   grid-column-start: 3;
    grid-row-start: 1;  
    border: 1px dotted rgb(53, 53, 53);
    margin:0 0 2vw 2vh;
    text-align:center
`
const Painel3 = styled.div`
    grid-column-start: 5;
    grid-row-start: 1;
    border: 1px dotted rgb(53, 53, 53);
    margin:0 0 2vw 2vh;
    text-align:center
`
const Painel4 = styled.div`
     grid-column-start: 7;
    grid-row-start: 1;
    border: 1px dotted rgb(53, 53, 53);
    margin:0 0 2vw 2vh;
    text-align:center
`
const Painel5 = styled.div`
     grid-column-start: 1;
    grid-row-start: 3;
     border: 1px dotted rgb(53, 53, 53);
     margin:0 0 2vw 2vh;
     text-align:center
// `
const Painel6 = styled.div`
  grid-column-start: 3;
    grid-row-start: 3;
  border: 1px dotted rgb(53, 53, 53);
   margin:0 0 2vw 2vh;
   text-align:center
`
const Painel7 = styled.div`
 grid-column-start: 5;
    grid-row-start: 3;
     border: 1px dotted rgb(53, 53, 53);
      margin:0 0 2vw 2vh;
      text-align:center
`
const Painel8 = styled.div`
 grid-column-start: 7;
    grid-row-start: 3;
     border: 1px dotted rgb(53, 53, 53);
      margin:0 0 2vw 2vh;
      text-align:center
`
const Botao = styled.button`
background-color:black;
color:#fff;
padding:1rem 2rem;
margin-bottom:1vh;
`


class Filters extends React.Component {

    render () {

        return (
            <Body>
                <TelaInteira>
                    <Main>
                        <Nav>
                            <h1>Filtros:</h1>
                            <label>Valor Mínímo: </label>
                            <input type="number"></input>
                            <label>Valor Maxímo: </label>
                            <input type="number"></input>
                            <label>Buscar Produtos: </label>
                            <input></input>
                        </Nav>
                        <Section >
                            <Painel1>
                                <Card
                                    imagem={Image}
                                    texto="Item A"
                                    value="199"
                                />
                                <Botao>Adicionar ao carrinho</Botao>
                            </Painel1>
                            <Painel2>
                                <Card
                                    imagem={Image}
                                    texto="Item B"
                                    value="70"
                                />
                                <Botao>Adicionar ao carrinho</Botao>
                            </Painel2>
                            <Painel3>
                                <Card
                                    imagem={Image}
                                    texto="Item C"
                                    value="250"
                                />
                                <Botao>Adicionar ao carrinho</Botao>
                            </Painel3>
                            <Painel4>
                                <Card
                                    imagem={Image}
                                    texto="Item D"
                                    value="300"
                                />
                                <Botao>Adicionar ao carrinho</Botao>
                            </Painel4>
                            <Painel5>
                                <Card
                                    imagem={Image}
                                    texto="Item E"
                                    value="400"
                                />
                                <Botao>Adicionar ao carrinho</Botao>
                            </Painel5>
                            <Painel6>
                                <Card
                                    imagem={Image}
                                    texto="Item F"
                                    value="500"
                                />
                                <Botao>Adicionar ao carrinho</Botao>
                            </Painel6>
                            <Painel7>
                                <Card
                                    imagem={Image}
                                    texto="Item G"
                                    value="501"
                                />
                                <Botao>Adicionar ao carrinho</Botao>
                            </Painel7>
                            <Painel8>
                                <Card
                                    imagem={Image}
                                    texto="Item H"
                                    value="210"
                                />
                                <Botao>Adicionar ao carrinho</Botao>
                            </Painel8>
                        </Section>
                    </Main>
                </TelaInteira>
                <BotaoCarrinho>
                    <ImagemCarrinho src={Carrinho} />
                </BotaoCarrinho>
            </Body>
        )
    }

}
export default Filters;
