import React, { useState, useEffect } from 'react';
import { perguntas as todasPerguntas } from '../data/perguntas';
import Pergunta from './Pergunta';
import Feedback from './Feedback';
import styled from 'styled-components'

const FundoJogo = styled.div`
  background-color: green;
  padding: 4px;
  height: 100%;
  display: grid;
  place-content: center;
  background-image: url('fundo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export default function Jogo({ nome, onFim }) {
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const selecionadas = embaralhar(todasPerguntas).slice(0, 5);
    setPerguntas(selecionadas);
  }, []);

  const responder = (tipo) => {
    if (tipo === 'correta_moral') setPontos(p => p + 10);
    else if (tipo === 'neutra') setPontos(p => p + 2);

    setFeedback(tipo);
    setTimeout(() => {
      setFeedback(null);
      if (indice < 4) setIndice(i => i + 1);
      else onFim(pontos + (tipo === 'correta_moral' ? 10 : tipo === 'neutra' ? 2 : 0));
    }, 3000);
  };

  return (
    <FundoJogo>
      {perguntas.length > 0 && (
        <>
          {(!(feedback)) ?
          <Pergunta pergunta={perguntas[indice]} onResponder={responder} />
          : <Feedback tipo={feedback} />}
        </>
      )}
    </FundoJogo>
  );
}