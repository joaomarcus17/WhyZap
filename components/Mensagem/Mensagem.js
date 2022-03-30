import React from 'react';
import styled from 'styled-components';

const MudancaDeLado = styled.div `
    width: 8em; 
    background-color: antiquewhite;
`
const Letra = styled.h4`
    background-color: green;
`
function Mensagem(props) {

    if (props.Usuario === "eu") {
        return (
            <div align = "Right">
                <MudancaDeLado>
                    <p>{ props.Mensagens}</p>
                </MudancaDeLado>
            </div>
        )
    }else{
        return (
            <div align = "Left">
                <MudancaDeLado>
                    <Letra>{ props.Usuario }</Letra>
                    <p>{ props.Mensagens}</p>
                </MudancaDeLado>
            </div>
        )
    }
}

export default Mensagem;