import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing : border-box;
        margin : 0 auto;
        padding: 0;
        max-width: 100%;
    }

    body{
        font-family: 'Poppins', sans-serif;
    }
`
export default GlobalStyles;