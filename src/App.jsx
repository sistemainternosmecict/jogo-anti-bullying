import { useState } from 'react';
import Menu from './components/Menu';
import Jogo from './components/Jogo';
import Fim from './components/Fim';
import Ranking from './components/Ranking';
import styled from 'styled-components';

const Aplicacao = styled.div`
  display: block;
  height: calc(100vh - 8px);
`;

export default function App() {
  const [fase, setFase] = useState('fim');
  const [nome, setNome] = useState('thyez');
  const [pontos, setPontos] = useState(1000);
  const [ranking, setRanking] = useState([]);

  const iniciarJogo = (nomeJogador) => {
    setNome(nomeJogador);
    setPontos(0);
    setFase('jogo');
  };

  const finalizarJogo = (pontuacaoFinal) => {
    setPontos(pontuacaoFinal);
    const novoRanking = [...ranking, { nome, pontos: pontuacaoFinal }].sort((a, b) => b.pontos - a.pontos).slice(0, 5);
    setRanking(novoRanking);
    setFase('fim');
  };

  return (
    <Aplicacao>
      {fase === 'menu' && <Menu onStart={iniciarJogo} onVerRanking={() => setFase('ranking')} />}
      {fase === 'jogo' && <Jogo nome={nome} onFim={finalizarJogo} />}
      {fase === 'fim' && <Fim nome={nome} pontos={pontos} ranking={ranking} onVoltar={() => setFase('menu')} />}
      {fase === 'ranking' && <Ranking ranking={ranking} onVoltar={() => setFase('menu')} />}
    </Aplicacao>
  );
}