import styled from 'styled-components';
import logoImg from './../../assets/logo-dourada.png';
interface Props {
    ativado?: boolean;
}

export const Section = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow-x:hidden;

    display: flex;
    justify-content: center;
    align-items:center;
    background-color:var(--marrom);

    .right-arrow{
        position:absolute;
        top: 50%;
        right:32px;
        font-size:3rem;
        color:rgba(159,119,45,0.2);
        transition:2s;
        z-index:10;
        cursor: pointer;
        
        &:hover{
            color:rgba(89,82,54,0.8);
            transition:1s;
        }
    }
    .left-arrow{
        position:absolute;
        top: 50%;
        left:32px;
        font-size:3rem;
        color:rgba(159,119,45,0.2);
        transition:2s;
        z-index:10;
        cursor: pointer;
        
        &:hover{
            color:rgba(89,82,54,0.8);
            transition:1s;
        }
    }
    .areaSlider{
        width:100%;
        
        &:before{
            /* requerido */
            content: ' ';
             /* posiciona nos limites do elemento pai */
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            /* estilo de preto quase transparente */
            background-color: black;
            background-image: url(${logoImg});
            background-size: 30rem;
            background-repeat: no-repeat;
            background-position-x: 85%;
            background-position-y: 75%;
            opacity: 0.8;
            z-index:9;
        }

        
        div{
            display: flex;
            align-items: center;
            
            img{
                position: relative;
                display: block;
                width: 100vw;
                height: 100vh;
                object-fit: cover;
            }
            h1{
                position: absolute;
                left:10rem;
                color: var(--bege);
                text-shadow: 1px 1px 3px gray;
                z-index:11;
                width: 50%;
                font-size: 3rem;
            }
        }
    }
`;

export const Dots = styled.section`
    position:absolute;
    bottom:25px;
    width: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10;
`;

export const Dot = styled.div`
    div{
        padding:0.3rem;
        border: 0.2rem solid ${(props: Props)=> (props.ativado ? `var(--bege)`: `var(--dourado)`)};
        transition:0.8s all;
        cursor: pointer;
        border-radius:50%;
        margin: 1rem;
    }
`;