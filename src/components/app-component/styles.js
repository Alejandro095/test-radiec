import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100vh;

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
    grid-template-columns: minmax(360px, 460px) 1fr;
    
  }
`;

export { Layout, Container };
