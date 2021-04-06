import styled from 'styled-components';

interface Props {
    scrollHeader?: boolean;
}

export const Header = styled.header`
    position: fixed;
    margin: 0 auto;
    padding: 1rem 5rem;

    width: 100vw;
    height: 70px;
    z-index: 100;

    display:flex;

    background: ${(props: Props)=> (props.scrollHeader ? 'rgba(159,119,45,1)': 'transparent')};
    transition:0.8s all;
`;

export const Nav = styled.nav`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
        height: 55px;
        
        img{
            height:100%;
        }
    }
    .navBar{
        ul{
            display: flex;

        }
        ul li{
            margin-left: 30px;
            color: var(--bege);
        }
    }
`;

