import React from 'react';

import Slider from './../components/Slider/slider';
import Navbar from './../components/Header/header';


// componente escrito no formato de funcao
const LandingCervejaria: React.FC = () => {


    return (
        < >
            <Navbar></Navbar>
            
            <Slider></Slider>
            <Slider></Slider>
        </>
    );
};
export default LandingCervejaria;