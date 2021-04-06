import React, {useState} from 'react';
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";

import {Section, Dots, Dot} from './style';
import { motion } from "framer-motion";


// componente escrito no formato de funcao
const Slider: React.FC = () => {
    
    const SliderData =[
        {
            image:'https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            text: 'Produzida por quem realmente entende de cerveja.',
        },
        {
            image:'https://images.unsplash.com/photo-1518176258769-f227c798150e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            text: 'Império traz o puro malte, a autenticidade da cerveja pilsen e ingredientes importados.',
        },
        {
            image:'https://images.unsplash.com/photo-1567579518027-7a113279f8ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
            text: 'Vem com tudo o que você procura em uma cerveja legítima mesmo.',
        },
        {
            image:'https://images.unsplash.com/photo-1518176258769-f227c798150e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            text: 'Império traz o puro malte, a autenticidade da cerveja pilsen e ingredientes importados.',
        },
        {
            image:'https://images.unsplash.com/photo-1567579518027-7a113279f8ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
            text: 'Vem com tudo o que você procura em uma cerveja legítima mesmo.',
        },
    ]

    const [current,setCurrent] = useState(0);
    const [orientation,setOrientation] = useState(0);
    const length = SliderData.length;

    const nextSlide = ()=>{
        setCurrent(current ===length -1 ? 0 : current+1);
        setOrientation(100);
    }
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length -1 : current-1);
        setOrientation(-100);
    }
    if(!Array.isArray(SliderData) || SliderData.length<=0){
        return null;
    }
        
    return (
        <Section>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        
            <Dots>
                {SliderData.map((slide,i)=>(
                    <Dot ativado={i===current}>
                        <div key={i}>
                       </div>
                    </Dot>
                    
                ))}
            </Dots>

            <div className='areaSlider'>
             {SliderData.map((slide, index)=>{
                return(   
                    <div key={index}>
                        {index===current && (<>
                                <motion.img
                                    src={slide.image} alt={slide.text}
                                    initial={{ opacity: 0.1}}
                                    animate={{ opacity: 1}}
                                    transition={{ duration: 2 }}
                                >
                                </motion.img>
                                <motion.h1
                                    initial={{ opacity: 0, x: orientation  }}
                                    animate={{ opacity: 1 , x: 0}}
                                    transition={{ duration: 1 }}
                                >
                                    {slide.text}
                                </motion.h1>
                        </>)}
                    </div>     
                )
            })}
            </div>
        </Section>
    );
};
export default Slider;