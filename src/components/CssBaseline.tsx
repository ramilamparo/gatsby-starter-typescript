import { createGlobalStyle } from "styled-components";

export const CssBaseline = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        /* 62.5% of the default browser font size(16px) = 10px */
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        padding: 3rem;
    }
`;
