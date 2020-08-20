import React from "react";
import styled from "styled-components";
const Imagem = styled.img`
width:240px
`
class Card extends React.Component {
    render(){
        return (
        <div>
          <Imagem src={this.props.imagem}/>
          <p>{this.props.texto}</p>
          <p>R${this.props.value}</p>
        </div>
      ) 
    } 
}
export default Card;
