import React from "react"
import Image from "../img/image1.jpg";
import styled from "styled-components";
import Carrinho from "../img/carrinho.png"
const ImagemCarrinho = styled.img`
width:60px;
float: right;
margin-right:2vw;
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
flex-basis:200px;
border-right-style:solid;
border-right-width:thin;
`
const Section = styled.section`
   padding-left: 20px;
    padding-top: 20px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: (1fr, 1fr, 1fr, 1fr);
 
   
     
`


const Painel1 = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
     border: 1px dotted rgb(53, 53, 53);
        margin-bottom:2vh;
`
const Painel2 = styled.div`
   grid-column-start: 3;
    grid-row-start: 1;  
     border: 1px dotted rgb(53, 53, 53);
        margin-bottom:2vh;
`
const Painel3 = styled.div`
    grid-column-start: 5;
    grid-row-start: 1;
     border: 1px dotted rgb(53, 53, 53);
        margin-bottom:2vh;
`
const Painel4 = styled.div`
     grid-column-start: 7;
    grid-row-start: 1;
     border: 1px dotted rgb(53, 53, 53);
        margin-bottom:2vh;
`
const Painel5 = styled.div`
     grid-column-start: 1;
    grid-row-start: 3;
     border: 1px dotted rgb(53, 53, 53);
`
const Painel6 = styled.div`
  grid-column-start: 3;
    grid-row-start: 3;
  border: 1px dotted rgb(53, 53, 53);
`
const Painel7 = styled.div`
 grid-column-start: 5;
    grid-row-start: 3;
     border: 1px dotted rgb(53, 53, 53);
`
const Painel8 = styled.div`
 grid-column-start: 7;
    grid-row-start: 3;
     border: 1px dotted rgb(53, 53, 53);
`
const Botao = styled.button`
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
                                <input></input>
                                <label>Valor Maxímo: </label>
                                <input></input>
                                <label>Buscar Produtos: </label>
                                <input></input>
                            </Nav>
                            <Section >
                                <Painel1>
                                    <img src={Image}  />
                                    <p>ITEM A</p>
                                    <p>R$ 40.50</p>
                                   <Botao>Adicionar ao carrinho</Botao>
                                </Painel1>
                                <Painel2>
                                <img src={Image} />
                                    <p>ITEM A</p>
                                    <p>R$ 40.50</p>
                                   <Botao>Adicionar ao carrinho</Botao>
                                </Painel2>
                                <Painel3>
                                <img src={Image} />
                                    <p>ITEM A</p>
                                    <p>R$ 40.50</p>
                                   <Botao>Adicionar ao carrinho</Botao>
                                </Painel3>
                                <Painel4>
                                <img src={Image} />
                                    <p>ITEM A</p>
                                    <p>R$ 40.50</p>
                                   <Botao>Adicionar ao carrinho</Botao>
                                </Painel4>
                                <Painel5>
                                <img src={Image} />
                                    <p>ITEM A</p>
                                    <p>R$ 40.50</p>
                                   <Botao>Adicionar ao carrinho</Botao>
                                </Painel5>
                                <Painel6>
                                <img src={Image} />
                                    <p>ITEM A</p>
                                    <p>R$ 40.50</p>
                                   <Botao>Adicionar ao carrinho</Botao>
                                </Painel6>
                                <Painel7>
                                <img src={Image} />
                                    <p>ITEM A</p>
                                    <p>R$ 40.50</p>
                                   <Botao>Adicionar ao carrinho</Botao>
                                </Painel7>
                                <Painel8>
                                <img src={Image} />
                                    <p>ITEM A</p>
                                    <p>R$ 40.50</p>
                                   <Botao>Adicionar ao carrinho</Botao>
                                </Painel8>
                        </Section>
                 </Main>    
                
            </TelaInteira> 
             <ImagemCarrinho src={Carrinho} />

        </Body>
            

        )
    }
}
export default Filters;
