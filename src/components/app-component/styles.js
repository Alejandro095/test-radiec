import styled from 'styled-components';

const Layer = styled.div`

width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.graySecond};
`

const Layout = styled.div`
  width: 100%;
  height: 100vh;

  max-width: 1920px;
  max-height: 1080px;

  background-color: ${({ theme }) => theme.template.primary};

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;

  flex: 1;

  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media (min-width: ${(props) => props.theme.breakPoints.small}) {
    grid-template-columns: minmax(18rem, 25rem) 1fr;
    
  }
`;

export { Layout, Container, Layer };
