import { Text, Title } from 'shared/text';
// Styles components
import { Layout } from './styles';
import theme from 'styles/theme-config';

import styled from "styled-components"
import useResponsive from 'hooks/use-responsive';



const Top = styled.div``
const Middle = styled.div`
  flex: 1;

`
const Bottom = styled.div``



const Aside = ({ children }) => {

  if (useResponsive(theme.general.breakPoints.small)) {
    return <Layout>
      <Top>
        <Title t='RADIEC' />
      </Top>

      <Middle>
        Middle
      </Middle>
    
      <Bottom>
        Bottom
      </Bottom>

    </Layout>
  } else {
    return <></>
  }
}

export default Aside;
