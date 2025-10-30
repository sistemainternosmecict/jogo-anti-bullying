import styled from 'styled-components'


const CustomFeedback = styled.p`
  color: ${(props) => props.cor};
  font-weight: bold;
  background-color: white;
  padding: 32px;
  font-size: 1em;
  border-radius: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  user-select: none;
  `;
export default function Feedback({ tipo, licao }) {
  const mensagem = licao
  let cor = null;
  if (tipo === 'correta') {
    cor = 'green';
  } else if (tipo === 'neutra') {
    cor = 'orange';
  } else {
    cor = 'red';
  }
  return <CustomFeedback cor={cor}>{mensagem}</CustomFeedback>;
}