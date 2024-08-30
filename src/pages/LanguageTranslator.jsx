import { useState } from 'react'; // Importa o hook useState do React
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes

// Componentes
import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import Loading from '../components/Loading';

// Hooks
import useFetch from '../hooks/useFetch';

// Define o estilo do container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 50px auto;
`;

// Define o estilo do label
const Label = styled.label`
  color: #555;
  font-size: 16px;
  margin-right: 10px;
`;

// Define o estilo do select
const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o estilo do texto traduzido
const TranslatedText = styled.p`
  color: #333;
  font-size: 18px;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

// Componente principal LanguageTranslator
const LanguageTranslator = () => {
  const [text, setText] = useState(''); // Define o estado para o texto a ser traduzido
  const [translatedText, setTranslatedText] = useState(''); // Define o estado para o texto traduzido
  const [sourceLang, setSourceLang] = useState('en'); // Define o estado para a língua de origem
  const [targetLang, setTargetLang] = useState('es'); // Define o estado para a língua de destino

  const {request, error, loading} = useFetch();

  // Função para buscar os dados do IP
  const handleClick = async () => {
    setTranslatedText('');
    const {response} = await request('https://api.mymemory.translated.net/get', {
      params: {
        q: text,
        langpair: `${sourceLang}|${targetLang}`,
      }
    });
    setTranslatedText(response.data.responseData.translatedText);
  };

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text} // Valor do campo de entrada é ligado ao estado text
        onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
        placeholder="Enter text to translate" // Placeholder do campo de entrada
      />
      <Button onClick={handleClick}>Translate</Button> {/* Botão que chama a função translateText quando clicado */}
      {loading && <Loading/>}
      {error && <p>Ocorreu um erro, tente novamente mais tarde.</p>}
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>} {/* Condicional que exibe o texto traduzido se translatedText não for vazio */}
    </Container>
  );
};

export default LanguageTranslator; // Exporta o componente LanguageTranslator como padrão
