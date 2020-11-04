import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;

  /* border: 4px solid blue; */

  background-color: ${({theme}) => theme.template.secondary};
  overflow-y: auto;
`;

export { Layout };
