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
export default function Feedback({ tipo }) {
  let mensagem = '', cor = '';
  if (tipo === 'correta_moral') {
    mensagem = 'Ótima escolha! Isso ajuda a criar um ambiente melhor.';
    cor = 'green';
  } else if (tipo === 'neutra') {
    mensagem = 'Escolha neutra. Você poderia ajudar mais!';
    cor = 'orange';
  } else {
    mensagem = 'Essa não foi uma boa escolha. Tente ajudar!';
    cor = 'red';
  }
  return <CustomFeedback cor={cor}>{mensagem}</CustomFeedback>;
}