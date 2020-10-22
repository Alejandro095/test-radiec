import styled from 'styled-components';
import { useTheme } from 'services/theme-service';

import { Subtitle, Title, Text, Span } from 'shared/text';

const Div = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.template.primary};
`;

const Home = () => {
  const [theme, dispatch] = useTheme();

  const handlerClick = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <Div>
      <button onClick={handlerClick}>Change</button>
      <br />

      <h1>Examples</h1>

      <Title>Titulo</Title>
      <Subtitle text='Subtitulossss' />

      <Text text='Parrafo del tetxo' />
      <Text t='Parrafo del tetxo segundo' />

      <Span>Span</Span>
    </Div>
  );
};

export default Home;
