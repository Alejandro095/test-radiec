// Styles components
import { Layout } from './styles';
import { PlayCircleFilled, HeartFilled } from "@ant-design/icons"
import { useThemeContext } from 'services/theme-service';
import styled from "styled-components"

const Right = styled.div``
const Left = styled.div``

const Player = ({ children }) => {
    const { colors } = useThemeContext()

    // return <Layout> Player works!  <PlayCircleFilled style={{color: colors.green }} /> <HeartFilled style={{color: colors.red }} />  {children}</Layout>
    
    return (
        <Layout>
            
            <Right>
                <img src="./no-image.webp" width="80px" height="80px" />
            </Right>


            <Left></Left>


        </Layout>
    )
};


export default Player;
