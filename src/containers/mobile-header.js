import useResponsive from "hooks/use-responsive"

import styled from "styled-components"


const Layout = styled.div`
width: 100%;
`
const MobileHader = () => {

    const show = useResponsive(750)

    return !show ? <p>Mobile header works!</p> : <></>

}

export default MobileHader