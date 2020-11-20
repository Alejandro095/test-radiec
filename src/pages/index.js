import styled from 'styled-components';
import { useTheme } from 'services/theme-service';

import { Subtitle, Title, Text, Span } from 'shared/text';
import usePlayer from 'hooks/use-player';
import { useSocket } from 'services/socket-service';

const Div = styled.div`
  background-color: ${({ theme }) => theme.template.primary};
`;

const Image = styled.div`
width: 100%;
height: 100%;

background-image: url(${ props => props.src });
background-position: center;
background-repeat: no-repeat;
background-size: cover;


filter: blur(4px);
`

const Layer = styled.div`
width: 100%;
height: 42.5vh;

overflow: hidden;

& > div {
  transform: scale(1.1);
}
`


const Home = () => {
  const [theme, dispatch] = useTheme();

  const socket = useSocket()
  const player = usePlayer();

  const handlerClick = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };


  return (
    <>
      <Layer>
      <Image src={socket.album && socket.album.images[0].url || "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"} ></Image>
      </Layer>
     

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
