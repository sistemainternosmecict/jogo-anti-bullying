import styled from 'styled-components'

const COR_BASICA = "#2a7951ff";

const CustomFeedback = styled.p`
  color: white;
  font-weight: bold;
  background-color: ${($props) => $props.cor || COR_BASICA};
  padding: 32px;
  font-size: 2em;
  border-radius: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  user-select: none;
  `;

export default function Feedback({ tipo, licao }) {
  const mensagem = licao
  let cor = null;
  if (tipo === 'correta') {
    cor = COR_BASICA;
  } else if (tipo === 'neutra') {
    cor = '#e49630ff';
  } else if (tipo === 'errada') {
    cor = '#b33b3bff';
  }
  return <CustomFeedback cor={cor}>{mensagem}</CustomFeedback>;
}