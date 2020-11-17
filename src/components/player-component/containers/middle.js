import styled from "styled-components"

const Middle = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

    & > div:nth-child(1) {
        display: flex;
    }

    & > div:nth-child(2) {
        display: flex;
        flex-basis: 6rem;
        justify-content: center;
        padding: 0 0.5rem;
    }

    & > div:nth-child(3) {
        display: flex;
        background-color: red;
        flex: 1;
        padding: 0 0.5rem;
    }

`

export default Middle;