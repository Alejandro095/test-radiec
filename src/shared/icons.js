import styled from 'styled-components';
import { PlayCircleFilled, HeartFilled } from "@ant-design/icons"

const IconBase = styled.div`
    cursor: pointer;
`

const PlayIconBase = styled(IconBase)`
    & span {
        font-size: 2.5rem;
        color: ${({theme}) => theme.colors.green}        
    }
`
const PlayIcon = (...props) => <PlayIconBase><PlayCircleFilled {...props}/></PlayIconBase>


const HeartIconBase = styled(IconBase)`
    & span {
        font-size: 1.25rem;
        color: ${({theme}) => theme.colors.red}
    }
`
const HeartIcon = (...props) => <HeartIconBase><HeartFilled {...props}/></HeartIconBase>


export { PlayIcon, HeartIcon };
