import { useEffect, useState, useRef } from 'react';
import Menu from './components/Menu';
import Jogo from './components/Jogo';
import Fim from './components/Fim';
import Ranking from './components/Ranking';
import styled from 'styled-components';
import { anosIniciais, anosFinais } from './data/perguntas';

const Aplicacao = styled.div`
  display: block;
  height: calc(100vh - 8px);
`;

function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export default function App() {
  const [fase, setFase] = useState('menu');
  const [nome, setNome] = useState('');
  const [pontos, setPontos] = useState(0);
  const [ranking, setRanking] = useState([]);
  const perguntas = useRef([])

  const [opcoes, setOpcoes] = useState({
    categoria: "anosIniciais"
  })

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

  useEffect(() => {
    if(opcoes.categoria == "anosIniciais"){
      perguntas.current = embaralhar(anosIniciais)
    }

    if(opcoes.categoria == "anosFinais"){
      perguntas.current = embaralhar(anosFinais)
    }
    
    console.log(perguntas)
  }, [opcoes])

  return (
    <Aplicacao>
      {fase === 'menu' && <Menu onStart={iniciarJogo} onVerRanking={() => setFase('ranking')} opcoes={opcoes} setOpcoes={setOpcoes} />}
      {fase === 'jogo' && <Jogo nome={nome} onFim={finalizarJogo} perguntas={perguntas.current}/>}
      {fase === 'fim' && <Fim nome={nome} pontos={pontos} ranking={ranking} onVoltar={() => setFase('menu')} />}
      {fase === 'ranking' && <Ranking ranking={ranking} onVoltar={() => setFase('menu')} />}
    </Aplicacao>
  );
}