import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body, html, #__next {
        width : 100%;
        min-height: 100%;
        margin: 0 !important;
        
    }

    body {
        margin: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        transition: all 0.25s;
        font-family: "Roboto"
    }

    h1,h2,h3,h4,h5,h6 {
        color: ${({ theme }) => theme.text.title}
    }

    p, span {
        color: ${({ theme }) => theme.text.text}
    }

`;

export default GlobalStyles;
