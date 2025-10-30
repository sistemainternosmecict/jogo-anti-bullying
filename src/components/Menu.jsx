import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const COR_BASICA = "#2a7951ff";
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
  background-image: url('fundo_3.png');
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
  user-drag: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  animation: ${flutuar} 2s linear infinite;
`;

const pulsar = keyframes`
  0%{background-color:${COR_BASICA_2};--placeholder-color: ${COR_BASICA};}
  50%{background-color:${COR_BASICA}; --placeholder-color: white;}
  100%{background-color:${COR_BASICA_2};--placeholder-color: ${COR_BASICA};}
`;

const CampoNome = styled.input`
  color: black;
  border: solid 3px ${COR_BASICA};
  text-align: center;
  border-radius: 0.5em;
  padding: 0.8em;
  width: 100%;
  max-width: 240px;
  font-size: 1.1em;
  animation: ${pulsar} 5s linear infinite;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));
  --placeholder-color: ${COR_BASICA};

  &::placeholder {
    color: var(--placeholder-color);
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
    background-color: ${COR_BASICA};
  }
`;

const BotaoRanking = styled(Botao)`
  &:hover {
    background-color: ${COR_BASICA};
  }
`;

const CustomFooter = styled.footer`
  display: grid;
  place-content: center;
  border-top: solid 3px #0d442fff;
  background-color: #2f7960ff;
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
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
  }
`;

const Config = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));

  p{}

  select{
    padding: 16px;
    cursor: pointer;
  }
`;

const SecureImage = styled.img`
  user-drag: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export default function Menu({ onStart, onVerRanking, opcoes, setOpcoes }) {
  const [nome, setNome] = useState('');
  const [configOpened, setConfigOpened] = useState(false)

  return (
    <MenuFundo>
      <Titulo src="/logo_2.png" alt="logo" />
      {(!configOpened) ? <>
      <CampoNome
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <BotaoJogar onClick={() => onStart(nome)}>Jogar</BotaoJogar>
      <BotaoRanking onClick={onVerRanking}>Ver Ranking</BotaoRanking>
      
      <BotaoRanking onClick={()=>setConfigOpened(true)} >Configurações</BotaoRanking>
      
       </>: <>
        <Config className="config">
          <p style={{color: COR_BASICA, fontSize: 20, fontFamily:"sans"}}>Configurações</p>
          <select style={{width: "100%", color: COR_BASICA, borderRadius: 8, border: `solid 3px ${COR_BASICA}`}} defaultValue={opcoes.categoria} onChange={e=>setOpcoes({...opcoes, categoria: e.target.value})} name="categoria" id="categoria">
            <option value="anosIniciais">Anos iniciais - 1º ao 5º ano</option>
            <option value="anosFinais">Anos finais - 6º ao 9º ano</option>
          </select>
          <BotaoRanking onClick={()=>setConfigOpened(false)}>Voltar</BotaoRanking>
        </Config>
       </>}
       <CustomFooter>
        <CustomStrip>
          <SecureImage src="./sub_logo.svg" alt="Logo da secretaria de educação" />
        </CustomStrip>
      </CustomFooter>
    </MenuFundo>
  );
}
