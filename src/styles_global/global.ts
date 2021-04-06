import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --white:#fff;
        --cinza: #f5f6fa;
        --bege:  #e3d18a;
        --dourado: #9f772d;
        --marrom: #392620;
     
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    } 

    

    @media(max-width: 1200px){
        html{
            font-size: 93.75;
        }
    }
    @media(max-width: 992px){
        html{
            font-size: 90%;
        }
    }
    @media(max-width: 768px){
        html{
            font-size: 85%;
        }
    }
    @media(max-width: 300px){
        html{
            font-size: 79%;
        }
    }
    body{
        background-color: var(--background);
        color: var(--text);
    }
    body,input, text-area, button{
        font: 400 16px 'Cormorant Garamond', serif;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
    }
    button{
        cursor: pointer;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration:none;
        color: inherit;
    }

    
`;

