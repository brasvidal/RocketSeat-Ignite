import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green:#33cc95;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape:#FFF;
}

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;

    }

    html{ 
        @media(maxwidth: 1080px){
            fontsize:93.75%;
        }

        @media(maxwidth: 720){
            fontsize:87.5%;
        }
    }

body{ 
    
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3 ,h4, h5,h6, strong{
    font-weight: 600;
}

button{ 
    cursor: pointer;
}

[disabled]{
    opacity:0.6;
    cursor: not-allowed;
}
`