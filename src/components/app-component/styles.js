import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.template.primary};
`;

export { Layout };
