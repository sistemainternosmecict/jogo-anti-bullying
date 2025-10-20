import styled from "styled-components";

const COR_BASICA = "#96f3f7";

const PerguntaContainer = styled.div`
  background-color: rgba(255, 255, 255, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 16px;
  border: solid 1px white;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  backdrop-filter: blur(4px);
  user-select: none;
`;

const PerguntaLiteral = styled.h1`
  font-size: 1em;
  font-family: sans-serif;
`;

const BtnOpcao = styled.button`
  display: block;
  margin: 5px auto;
  border: none;
  width: 100%;
  cursor: pointer;
  font-size: 1em;
  padding: 8px;
  border-radius: 4px;
  
  &:hover{
    background-color: ${COR_BASICA};
    color: black;
  }
`;

export default function Pergunta({ pergunta, onResponder }) {
  return (
    <PerguntaContainer>
      <PerguntaLiteral>{pergunta.pergunta}</PerguntaLiteral>
      {pergunta.opcoes.map((opcao, i) => (
        <BtnOpcao key={i} onClick={() => onResponder(opcao.tipo)} >
          {opcao.texto}
        </BtnOpcao>
      ))}
    </PerguntaContainer>
  );
}