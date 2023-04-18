import React, { useState, useEffect } from 'react';

import '../assets/Styles.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const SliderImgsComponent = () => {
    //Se define una variable de estado llamada activeSlide y una función para actualizar su valor llamada setActiveSlide.
    //La variable de estado inicialmente se establece en 0.
    const [activeSlide, setActiveSlide] = useState(0);

    //Se define la función sliderNav que toma un parámetro " index "
    const sliderNav = (index) => {
        //Se llama a la función setActiveSlide para actualizar el valor de la variable de estado activeSlide con el valor del parámetro index
        setActiveSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            let nextSlide = activeSlide + 1;
            if (nextSlide > 2) {
                nextSlide = 0;
            }
            sliderNav(nextSlide);
        }, 10000); //En milisegundos

        return () => clearInterval(interval);
    }, [activeSlide]);

    return (
        <section className="home">
            <div className="slider-wrapper" style={{ width: '100%', display: 'flex' }}>
                <img className={activeSlide === 0 ? 'image-slide active' : 'image-slide'} src={img2}></img>
                <img className={activeSlide === 1 ? 'image-slide active' : 'image-slide'} src={img1}></img>
                <img className={activeSlide === 2 ? 'image-slide active' : 'image-slide'} src={img3}></img>
            </div>

            <div className={activeSlide === 0 ? 'content active' : 'content'}>
                <h1>Título 1.<br /><span>Subtítulo 1</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More</a>
            </div>

            <div className={activeSlide === 1 ? 'content active' : 'content'}>
                <h1>Título 2.<br /><span>Subtítulo 2</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More</a>
            </div>

            <div className={activeSlide === 2 ? 'content active' : 'content'}>
                <h1>Título 3.<br /><span>Subtítulo 3</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More</a>
            </div>

            <div className="media-icons">
                <a href="https://facebook.com/"><FaFacebook /></a>
                <a href="https://www.instagram.com/"><FaInstagram /></a>
                <a href="https://twitter.com/"><FaTwitter /></a>
            </div>

            <div className="slider-navigation">
                <div className={activeSlide === 0 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(0)}></div>
                <div className={activeSlide === 1 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(1)}></div>
                <div className={activeSlide === 2 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(2)}></div>
            </div>

        </section>
    );
};
export default SliderImgsComponent;

/*
<section className="home" style={{ overflow: 'hidden' }}>
            <div className="slider-wrapper" style={{ width: '100%', display: 'flex' }}>
                <img className={activeSlide === 0 ? 'image-slide active' : 'image-slide'} src={img1}></img>
                <img className={activeSlide === 1 ? 'image-slide active' : 'image-slide'} src={img2}></img>
                <img className={activeSlide === 2 ? 'image-slide active' : 'image-slide'} src={img3}></img>
            </div>

            <div className={activeSlide === 0 ? 'content active' : 'content'}>
                <h1>Título 1.<br /><span>Subtítulo 1</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More</a>
            </div>

            <div className={activeSlide === 1 ? 'content active' : 'content'}>
                <h1>Título 2.<br /><span>Subtítulo 2</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More</a>
            </div>

            <div className={activeSlide === 2 ? 'content active' : 'content'}>
                <h1>Título 3.<br /><span>Subtítulo 3</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More 
*/