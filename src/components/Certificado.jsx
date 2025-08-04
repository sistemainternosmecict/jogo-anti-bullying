import styled from "styled-components";

const ContainerCertificado = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/diploma.jpeg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color:rgb(58, 42, 21);
`;

const NomeJogador = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #412911;
  text-align: center;
  font-family: 'Times New Roman', serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  padding: 20px 40px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    margin-top: 16px;
    font-size: 3rem;
  }

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 764px) {
    font-size: 1.5rem;
    margin-top: 32px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    margin-top: 64px;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    margin-top: 96px;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
    margin-top: 96px;
  }
`;

const TextoCertificado = styled.div`
  font-size: 1.8em;
  color: #2c3e50;
  text-align: center;
  font-family: 'Times New Roman', serif;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  background: rgba(255, 255, 255, 0.8);
  padding: 15px 30px;
  border-radius: 8px;
  border: 2px solid #d18137;
  margin-bottom: 30px;
`;

const BotaoFechar = styled.button`
  background-color: #d18137;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  position: absolute;
  bottom: 20px;
  right: 20px;

  &:hover {
    background-color: #b06a2a;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.4);
  }
`;

export default function Certificado({ nome, onFechar }) {
  return (
    <ContainerCertificado>
      <NomeJogador>
        {nome}
      </NomeJogador>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BotaoFechar onClick={onFechar}>
        Fechar Certificado
      </BotaoFechar>
    </ContainerCertificado>
  );
} 