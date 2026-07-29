import { createGlobalStyle } from "styled-components";


export const GlobalCss = createGlobalStyle ` 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Condensed", sans-serif;
    list-style: none;

}
.container {
    max-width: 1620px;
    width: 100%;
    margin: 0 auto;
}

`

export const colors = {
    white: '#eee',
    gray: '#737373',
    black: '#000',
    red: '#dc2626',
}