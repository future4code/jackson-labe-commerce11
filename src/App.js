import React from 'react';
import Filters from "./components/Filters";
// import styled from "styled-components";
// const Main = styled.main`
//     min-height: 100vh;
//     display: flex;
// `
// const Nav = styled.nav`
// flex-basis:300px;
// border-right-style:solid;
// border-right-width:thin;
// `
class App extends React.Component {
  state = [
    {
    id:1,
    name: "Item1",
    value:"",
    imageUrl: "",
  },
   {
      id: 2,
      name: "Item2",
      value: "",
      imageUrl: "",
    },
     {
      id: 3,
      name: "Item3",
      value: "",
      imageUrl: "",
    },
     {
    id:4,
    name: "Item4",
    value:"",
    imageUrl: "",
  },
   {
    id:5,
    name: "Item5",
    value:"",
    imageUrl: "",
  },
   {
    id:6,
    name: "Item6",
    value:"",
    imageUrl: "",
  },
   {
    id:7,
    name: "Item7",
    value:"",
    imageUrl: "",
  },
   {
      id: 8,
      name: "Item8",
      value: "",
      imageUrl: "",
    }
]
  // renderizaEtapa = () => {
  //   switch (this.state.id) {
  //     case 1:
  //       return  ;
  //     case 2:
  //       return <Etapa2 />;
  //     case 3:
  //       return <Etapa3 />;
  //     case 4:
  //       return <Final />;
  //     default:
  //       return <Final />;
  //   }
  // };
  render(){
    
     return (
    <div >
        <Filters />   
        <h1>itens do carrinho</h1>     
    </div>
  );
  }
 
}

export default App;
