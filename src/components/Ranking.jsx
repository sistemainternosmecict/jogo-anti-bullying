import styled, { keyframes } from "styled-components";

const COR_BASICA = "#d18137";
const COR_BASICA_2 = "#ddd";
const COR_BASICA_3 = "rgba(209, 129, 55, 0.2)";

const ZoomIn = keyframes`
  from{
    background-size: 100%;
  }
  to{
    background-size: 110%;
  }
`;

const CustomRankingContainer = styled.div`
  text-align: center;
  padding: 4px;
  height: 100%;
  display: grid;
  place-content: center;
  user-select: none;
  background-image: url("./pessoas.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${ZoomIn} 30s ease;
  object-fit: cover;
`;

const CustomContainer = styled.div`
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
`;

export default function Ranking({ ranking, onVoltar }) {
  return (
    <CustomRankingContainer>
      <CustomContainer>
        <h2>Ranking</h2>
        <ul>
          {ranking.map((item, i) => (
            <li key={i}>{i + 1}. {item.nome}: {item.pontos}</li>
          ))}
        </ul>
        <button onClick={onVoltar}>Voltar</button>

      </CustomContainer>
    </CustomRankingContainer>
  );
}