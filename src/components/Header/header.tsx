import React, {useState, useEffect} from 'react';

import { Header,  Nav} from './style'
import { TiSocialYoutube, TiSocialFacebook,TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
//import { motion } from "framer-motion";
import logoImg from './../../assets/logo-branco.png';

// componente escrito no formato de funcao
const Navbar: React.FC = () => {
    
    const[scrollHeader, setScrollHeader] = useState(false);
    
    const changeNav = () =>{
        if(window.scrollY>30){
            setScrollHeader(true);
        }else{
            setScrollHeader(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav); 
    }, [])

    return (

        <Header scrollHeader={scrollHeader}>
                <Nav>
                    <div className="logo">
                        <img alt = "43" src={logoImg}/>
                    </div>
                    <nav className="navBar"> 
                        <ul>
                            <li><TiSocialYoutube size={35}/></li>
                            <li><TiSocialFacebook size={35}/></li>
                            <li><TiSocialTwitter size={35}/></li>
                            <li><TiSocialInstagram size={35}/></li>
                        </ul>      
                    </nav>
                </Nav>
        </Header>
        
    );
};
export default Navbar;