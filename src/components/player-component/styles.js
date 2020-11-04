import styled from 'styled-components';

const Layout = styled.div`
  height: 6rem;
  width: 100%;

  /* border: 4px solid green; */
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export { Layout };
