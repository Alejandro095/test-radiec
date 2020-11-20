import styled from 'styled-components';
import { PlayCircleFilled, HeartFilled, FacebookFilled, TwitterSquareFilled, InstagramFilled, MailFilled } from "@ant-design/icons"

const IconBase = styled.div`
    cursor: pointer;
`

const PlayIconBase = styled(IconBase)`
    & span {
        font-size: 2.5rem;
        color: ${({theme}) => theme.colors.green}        
    }
`
const PlayIcon = (...props) => <PlayIconBase><PlayCircleFilled/></PlayIconBase>


const HeartIconBase = styled(IconBase)`
    & span {
        font-size: 1.25rem;
        color: ${({theme}) => theme.colors.red}
    }
`
const HeartIcon = (...props) => <HeartIconBase><HeartFilled/></HeartIconBase>

const SocialeIcons = styled(IconBase)`

    & span {
        font-size: 1.25rem;
        color: ${({theme}) => theme.text.subtitle}
    }
`

const FacebookIcon = (...props) => <SocialeIcons><FacebookFilled/></SocialeIcons>
const TwitterIcon = (...props) => <SocialeIcons><TwitterSquareFilled/></SocialeIcons>
const InstagramIcon = (...props) => <SocialeIcons><InstagramFilled/></SocialeIcons>
const EmailIcon = (...props) => <SocialeIcons><MailFilled/></SocialeIcons>


export { PlayIcon, HeartIcon, FacebookIcon, TwitterIcon, InstagramIcon, EmailIcon };
