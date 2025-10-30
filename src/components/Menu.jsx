import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
  min-height: 100vh;
  background-image: url('fundo.png');
  background-size: cover;
  background-position: center;
  user-select: none;
  position: relative;
  box-sizing: border-box;
`;

const flutuar = keyframes`
  0%{ filter: drop-shadow(0 0 2px rgba(53, 31, 22, 0.2)); transform: translateY(0);}
  50%{ filter: drop-shadow(0 4px 4px rgba(53, 31, 22, 0.4));  transform: translateY(-5px);}
  100%{ filter: drop-shadow(0 0 2px rgba(53, 31, 22, 0.2));  transform: translateY(0);}
`;

const Titulo = styled.img`
  width: 100%;
  max-width: 300px;
  animation: ${flutuar} 2s linear infinite;
`;

const pulsar = keyframes`
  0%{background-color:${COR_BASICA_2};}
  50%{background-color:#e9a070;}
  100%{background-color:${COR_BASICA_2};}
`;

const CampoNome = styled.input`
  color: black;
  border: solid 1px black;
  text-align: center;
  border-radius: 0.5em;
  padding: 0.8em;
  width: 100%;
  max-width: 240px;
  font-size: 1.1em;
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
  width: 100%;
  max-width: 270px;
  height: 3em;
  font-size: 1em;
  margin: 1rem 0;
  border-radius: 0.5em;
  cursor: pointer;
  border: solid 3px ${COR_BASICA};
  transition: all .2s ease-in-out;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));

  &:hover {
    color: white;
  }
`;

const BotaoJogar = styled(Botao)`
  &:hover {
    background-color: green;
  }
`;

const BotaoRanking = styled(Botao)`
  &:hover {
    background-color: orange;
  }
`;

const CustomFooter = styled.footer`
  display: grid;
  place-content: center;
  border-top: solid 3px #d18137;
  background-color: #3b2204;
  width: 100vw;
  height: 120px;
  margin-top: auto;
  position: absolute;
  bottom: 0;

  @media (max-width: 600px) {
    height: 100px;
  }
`;

const CustomStrip = styled.div`
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: relative;

  img {
    position: relative;
    width: 100%;
    max-width: 250px;
    object-fit: contain;
    object-position: center;
    top: -80%;
  }
`;

export default function Menu({ onStart, onVerRanking }) {
  const [nome, setNome] = useState('');

  return (
    <MenuFundo>
      <Titulo src="/logo_anti_bullying.png" alt="logo" />
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
          <img src="./logo-edu.png" alt="Logo da secretaria de educação" />
        </CustomStrip>
      </CustomFooter>
    </MenuFundo>
  );
}
