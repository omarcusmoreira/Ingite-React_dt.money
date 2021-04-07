import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --red:#e52e4d;
        --blue:#5429cc;
        --green:#33cc95;
        --blue-light:#6933ff;
        --text-title:#363f5f;
        --text-body:#969cb3;
        
        --background:#f0f2f5;
        --shape:#fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body { 
        background: var(--background);
        -webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight:600;
    }
    
    html {
        @media (max-width: 1080){
            font-size: 93.75% //15px
        }

        @media (max-width:720){
            font-size: 87.5% //14px 
        }
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width:100%;
        max-width:576px;
        background: var(--background);
        border-radius: 0.25rem;
        padding: 3rem;
        position: relative;

    }

    .react-modal-close-button{
        position: absolute;
        top: 1.5rem;
        right:1.5rem;
        border:0;
        background: transparent;
        transition: filter 0.3s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }

`
