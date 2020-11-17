import styled from "styled-components"

const Information = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 1rem;
    
    white-space: nowrap;

    & p {
        margin: 0 0 0.25rem 0;
        color: ${({theme}) => theme.text.title}
    }

    & p:nth-child(2) {
        margin: 0;
        color: ${({theme}) => theme.text.subtitle}
    }
`

export default Information;