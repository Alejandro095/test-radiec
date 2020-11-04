import styled from 'styled-components';
import { useTheme } from 'services/theme-service';

import { Subtitle, Title, Text, Span } from 'shared/text';
import usePlayer from 'hooks/use-player';

const Div = styled.div`
  background-color: ${({ theme }) => theme.template.primary};
`;

const Home = () => {
  const [theme, dispatch] = useTheme();

  const player = usePlayer();

  const handlerClick = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <>
      <button onClick={handlerClick}>Change</button>
      <br />

      <h1>Examples</h1>

      <Title>Titulo</Title>
      <Subtitle text='Subtitulossss' />

      <Text text='Parrafo del tetxo' />

      <Span>Span</Span>
      <br />
      <button onClick={player}>Play</button>
    </>
  );
};

export default Home;
