import React, { useState, useEffect } from 'react';

import Pergunta from './Pergunta';
import Feedback from './Feedback';
import styled from 'styled-components'

const FundoJogo = styled.div`
  background-color: green;
  padding: 4px;
  height: 100%;
  display: grid;
  place-content: center;
  background-image: url('fundo_3.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function Jogo({ nome, onFim, perguntas }) {
  const [perguntasProntas, setPerguntasProntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const selecionadas = perguntas.slice(0, 5);
    setPerguntasProntas(selecionadas);
  }, []);

  function responder(tipo, licao){
    if (tipo === 'certa') setPontos(p => p + 10);
    else if (tipo === 'neutra') setPontos(p => p + 2);

    setFeedback({tipo: tipo, licao: licao});

    setTimeout(() => {
      setFeedback(null);
      if (indice < 4) setIndice(i => i + 1);
      else onFim(pontos + (tipo === 'certa' ? 10 : tipo === 'neutra' ? 2 : 0));
    }, 5000);
  };

  return (
    <FundoJogo>
      {perguntasProntas.length > 0 && (
        <>
          {(!(feedback)) ?
          <Pergunta pergunta={perguntasProntas[indice]} responder={responder} />
          : <Feedback tipo={feedback.tipo} licao={feedback.licao}/>}
        </>
      )}
    </FundoJogo>
  );
}