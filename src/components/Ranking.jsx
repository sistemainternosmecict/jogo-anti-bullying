import styled, { keyframes } from "styled-components";

const COR_BASICA = "#2a7951ff";
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
  background-image: url("./fundo_3.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${ZoomIn} 30s ease;
  object-fit: cover;
`;

const CustomContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
`;

const CustomButton = styled.button`
  padding: 8px;
  border-radius: 4px;
  border: solid 1px white;
  color: white;
  background-color: ${COR_BASICA};
  cursor: pointer;

  &:hover{
    background-color: white;
    color: ${COR_BASICA};
    border: solid 1px ${COR_BASICA};
  }
`;

const Tabela = styled.table`
  width: 100%;
  borderCollapse: collapse;
  border: solid 1px ${COR_BASICA};
  margin: 0;
  padding: 0;

  thead tr{
    background-color: ${COR_BASICA};
    color: ${COR_BASICA_2};
  }

  td{
    padding: 4px;
  }
`;

export default function Ranking({ ranking, onVoltar }) {
  return (
    <CustomRankingContainer>
      <CustomContainer>
        <h2 style={{fontSize: 40, fontFamily: "sans", color:COR_BASICA}}>Ranking</h2>
        
        <Tabela>
          <thead>
            <tr>
              <td>Nome</td>
              <td>---</td>
              <td>Pontos</td>
            </tr>
          </thead>
          <tbody>
            {ranking.map((item, i) => (
              <tr key={i}>
                <td>{item.nome}</td>
                <td>---</td>
                <td>{item.pontos}</td>
              </tr>
            ))}
          </tbody>
        </Tabela>
        <CustomButton onClick={onVoltar}>Voltar</CustomButton>

      </CustomContainer>
    </CustomRankingContainer>
  );
}