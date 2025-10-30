import styled from "styled-components";

const COR_BASICA = "#2a7951ff";
const COR_BASICA_2 = "#ddd";
const COR_BASICA_3 = "rgba(209, 129, 55, 0.2)";

const PerguntaContainer = styled.div`
  background-color: rgba(255, 255, 255, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  border-radius: 16px;
  border: solid 1px white;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  backdrop-filter: blur(16px);
  user-select: none;
`;

const PerguntaLiteral = styled.h1`
  font-size: 2em;
  font-family: sans-serif;
  filter: drop-shadow(0 1px 4px rgba(0,0,0,0.4));
  color: ${COR_BASICA_2};
  background-color: ${COR_BASICA};
  padding: 32px;
  border-radius: 4px;

`;

const BtnOpcao = styled.button`
  display: block;
  margin: 5px auto;
  border: none;
  width: 100%;
  cursor: pointer;
  font-size: 1em;
  padding: 16px;
  border-radius: 4px;
  
  &:hover{
    background-color: ${COR_BASICA};
    color: white;
  }
`;

export default function Pergunta({ pergunta, responder }) {
  return (
    <PerguntaContainer>
      <PerguntaLiteral>{pergunta.pergunta}</PerguntaLiteral>
      {pergunta.opcoes.map((opcao, i) => (
        <BtnOpcao key={i} onClick={() => responder(opcao.tipo, opcao.licao)} >
          {opcao.texto}
        </BtnOpcao>
      ))}
    </PerguntaContainer>
  );
}