import React from "react";
import './App.css';
import styled from "styled-components";
import Mensagem from "./components/Mensagem/Mensagem";

//#######Design########//

// Codigo utilizado para englobar toda a tela
const DivPai = styled.div`
  background-color: #417B5A;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32em;
`
// Codigo utilizado para fazer a caixa onde as mensagens irão aparecer
const DivFilho = styled.div`
  background-color: #D0CEBA;
`
// codigo utilizado para fazer o input do usuario que aparecerar na tela
const Usuario = styled.input`
  width: 8em;
`
// Codigo utlizado para fazer a caixa onde o usuario irá digitar as mensagens
const Mensagens = styled.input`
  width: 25em;
`
const Enviar = styled.button`
  width: 6em;
`

const BatePapo = styled.div`
 min-height: 20em ;
 height: auto;

`



class App extends React.Component {
 //#######Parte Funcional#######//

  state = {
    Usuario: "",
    Mensagens: "",
    BatePapo: []
  };
 
  onChangeUsuario = (event) => {
    this.setState({ Usuario: event.target.value});
  }

  onChangeMensagens = (event) =>{
    this.setState({Mensagens: event.target.value});
  }

  adicionarMensagem = () => {
    const novaMensagem = {
      Usuario: this.state.Usuario,
      Mensagens: this.state.Mensagens,
      id: Math.random()
    };
    const novaMensagens = [...this.state.BatePapo, novaMensagem];
    this.setState({BatePapo: novaMensagens});
    this.setState({
      Usuario:"",
      Mensagens:""
    });
  }


render(){
   const novaMensagemMapeado = this.state.BatePapo.map((novaMensagem) =>{
     return (
      <Mensagem  key={novaMensagem.id} Usuario = {novaMensagem.Usuario} Mensagens = {novaMensagem.Mensagens} ></Mensagem>
  
     )
    })
  
    return (
      <DivPai>
        <DivFilho>
          <BatePapo>
            {novaMensagemMapeado}
          </BatePapo>
          <Usuario onChange={this.onChangeUsuario} value={this.state.Usuario}></Usuario>
          <Mensagens onChange={this.onChangeMensagens} value={this.state.Mensagens}></Mensagens>
          <Enviar onClick={this.adicionarMensagem}>Enviar</Enviar>
        </DivFilho> 
      
      </DivPai>
    );
  }
}

export default App;
 