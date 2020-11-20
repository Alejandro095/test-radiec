// import { Subtitle, Text } from 'shared/text';
// Styles components
import { Layout } from './styles';
import theme from 'styles/theme-config';

import styled from "styled-components"
import useResponsive from 'hooks/use-responsive';
import { FacebookIcon, InstagramIcon, TwitterIcon, EmailIcon } from "shared/icons"

const Top = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Middle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
const Bottom = styled.div``

// TITLE
const baseRadiec = styled.p`
  display: inline;
  font-size: 3.5rem;
  font-family: "Raleway";
  font-weight:600;
`
const Rad = styled(baseRadiec)`
  color:  ${({theme}) => theme.logoColor};
`
const Iec = styled(baseRadiec)`
  color:  ${({theme}) => theme.colors.green};
`
const Title = () => <span> <Rad>RAD</Rad> <Iec>IEC</Iec> </span>

// SUBTITLE
const Subtitle = styled.span`
  color: ${({theme}) => theme.text.title};
  font-size: 1rem;
`

const Social = styled.div`
width: 11rem;
  padding: 3rem 0 3rem 0;
  display: flex;

  justify-content: space-around;
  align-items: center;

`

const Aside = ({ children }) => {

  if (useResponsive(theme.general.breakPoints.small)) {
    return <Layout>
      <Top>
        <Title />
        <Subtitle> Grupo Estudiantil IEC </Subtitle>

          <Social>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <EmailIcon />
          </Social>

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
