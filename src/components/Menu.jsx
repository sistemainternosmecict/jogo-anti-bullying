import { useState } from 'react';
import styled, { keyframes } from 'styled-components'

const COR_BASICA = "#d18137";
const COR_BASICA_2 = "#ddd";
const COR_BASICA_3 = "rgba(209, 129, 55, 0.2)";

const MenuFundo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  background-color: ${COR_BASICA};
  text-align: center;
  height: 100%;
  background-image: url('fundo.png');
  background-size: cover;
  background-position: center;
  user-select: none;
`;

const Titulo = styled.h1`
  background-color: ${COR_BASICA_3};
  backdrop-filter: blur(16px);
  color: white;
  font-family: sans-serif;
  width: fit-content;
  padding: 16px;
  border-radius: 8px;
  filter: drop-shadow(0 2px 4px black);
  font-size: 128px;
  border: solid 3px ${COR_BASICA};
`;

const pulsar = keyframes`
  0%{background-color:${COR_BASICA_2};}
  50%{background-color:#e9a070}
  100%{background-color:${COR_BASICA_2};}
`;

const CampoNome = styled.input`
  color: black;
  border: solid 1px black;
  text-align: center;
  border-radius: 8px;
  padding: 8px;
  width: 300px;
  font-size: 1.5em;
  animation: ${pulsar} 2s linear infinite;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));

  &::placeholder {
    color: #e06615;
  }

  &:focus {
    animation: none;
  }
`;

const Botao = styled.button`
  width: 320px;
  height: 50px;
  font-size: 2em;
  margin: 16px 0;
  border-radius: 8px;
  cursor: pointer;
  border: solid 3px ${COR_BASICA};
  transition: all .2s ease-in-out;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));

  &:hover{
    color: white;
  }
  `;

const BotaoJogar = styled(Botao)`
  &:hover{
    background-color: green;
  }
  `;

const BotaoRanking = styled(Botao)`
  &:hover{
    background-color: orange;
  }
  `;

const CustomFooter = styled.footer`
  display: grid;
  place-content: center;
  border-top: solid 3px #d18137;
  position: absolute;
  bottom: 0;
  background-color: #3b2204;
  width: 100%;
  height: 150px;
  content: "";
`;

const CustomStrip = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`;

export default function Menu({ onStart, onVerRanking }) {
  const [nome, setNome] = useState('');

  return (
    <MenuFundo>
      <Titulo>Jogo Anti-Bullying</Titulo>
      <CampoNome
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <BotaoJogar onClick={() => onStart(nome)}>Jogar</BotaoJogar>
      <BotaoRanking onClick={onVerRanking}>Ver Ranking</BotaoRanking>
      <CustomFooter>
        <CustomStrip>
          <img style={{position: "relative", width: "400px", objectFit: "cover", objectPosition: "center", top: "-50px"}} className='logo' src="./logo-edu.png" alt="Logo da secretaria de educação" />
        </CustomStrip>
      </CustomFooter>
    </MenuFundo>
  );
}