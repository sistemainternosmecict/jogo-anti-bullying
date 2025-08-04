import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Certificado from "./Certificado";

const COR_BASICA = "#d18137";
const COR_BASICA_2 = "#ddd";
const COR_BASICA_3 = "rgba(209, 129, 55, 0.2)";
const COR_BASICA_4 = "rgba(255, 255, 255, 0.8)";

const ZoomIn = keyframes`
  from{
    background-size: 100%;
  }
  to{
    background-size: 110%;
  }
`;

const CustomContainer = styled.div`
  text-align: center;
  padding: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  background-image: url("./pessoas.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${ZoomIn} 30s ease;
  object-fit: cover;
`;

const CustomTitle = styled.h1`
  font-size: 2em;
  font-family: sans-serif;
  background-color: ${COR_BASICA_4};
  color: ${COR_BASICA};
  padding: 8px;
  border-radius: 8px;
  border: solid 3px ${COR_BASICA};
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
`;

const CustomRankingContainer = styled.div`
  background-color: ${COR_BASICA_4};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 240px;
  border: solid 3px ${COR_BASICA_2};
  border-radius: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
`;

const CustomPoints = styled.h2`
  background-color: rgba(255,255,255,0.8);
  padding: 16px;
  border: solid 1px ${COR_BASICA_2};
  border-radius: 8px;
`;

const CustomRankingTitle = styled.h3`
  margin: 32px 0 0;
`;

const CustomList = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 400px;
  padding-left: 0;
  
  li{
    display: flex;
    justify-content: space-between;
    margin: 2px 0;
    padding: 8px;
    border-radius: 8px;
    background-color: ${COR_BASICA_2};
    cursor: pointer;

    &:hover{
      background-color: ${COR_BASICA};
    }
  }
`;

const CustomButton = styled.button`
  margin: 16px;
  width: 100%;
  max-width: 500px;
  height: 50px;
  border-radius: 8px;
  background-color: ${COR_BASICA_2};
  border: solid 3px ${COR_BASICA};
  font-size: 1.2em;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &:hover{
    background-color: ${COR_BASICA};
    color: ${COR_BASICA_4};
  }
`;

const CertificadoButton = styled.button`
  margin: 16px;
  width: 100%;
  max-width: 500px;
  height: 50px;
  border-radius: 8px;
  background-color: #4CAF50;
  border: solid 3px #45a049;
  font-size: 1.2em;
  transition: all .2s ease-in-out;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover{
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }
`;

export default function Fim({ nome, pontos, ranking, onVoltar }) {
  const [mostrarCertificado, setMostrarCertificado] = useState(false);
  const pontuacaoAlta = pontos >= 30; // Considera pontuação alta se >= 30 pontos

  return (
    <>
      <CustomContainer>
        <CustomTitle>Fim da Rodada, {nome}!</CustomTitle>
        <CustomPoints>Sua pontuação: {pontos} pontos</CustomPoints>

        {pontuacaoAlta && (
          <CustomPoints style={{ backgroundColor: '#4CAF50', color: 'white', border: '3px solid #45a049' }}>
            🎉 Parabéns! Você completou o jogo com sucesso! 🎉
          </CustomPoints>
        )}

        <CustomRankingContainer>
          <CustomRankingTitle>Ranking</CustomRankingTitle>
          <CustomList>
            {ranking.map((item, i) => (
              <li key={i}><span>{i + 1} - {item.nome} </span>
              .............................
              <span>{item.pontos} pontos</span></li>
            ))}
          </CustomList>
        </CustomRankingContainer>
        
        {pontuacaoAlta && (
          <CertificadoButton onClick={() => setMostrarCertificado(true)}>
            🏆 Ver Certificado de Conclusão
          </CertificadoButton>
        )}
        
        <CustomButton onClick={onVoltar}>Voltar ao Menu</CustomButton>
      </CustomContainer>

      {mostrarCertificado && (
        <Certificado 
          nome={nome} 
          onFechar={() => setMostrarCertificado(false)} 
        />
      )}
    </>
  );
}