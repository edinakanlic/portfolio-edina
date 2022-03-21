import React from 'react';
import edina from '../img/about-3.jpg';
import { FaAngleDoubleRight } from 'react-icons/fa';
import About from './About';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Hi, my name is Edina Kanlić</h1>
            <p>
              junior front end developer
              <span className='right-angle'>
                <FaAngleDoubleRight />
              </span>
            </p>
          <div className='jobs-container'>
            <p>
              mathematician
              <span className='right-angle'>
                <FaAngleDoubleRight />
              </span>
            </p>
            <p> math teacher</p>
          </div>

          <a href='#about' className='btn-primary'>
            explore
          </a>
        </article>

        <article className='hero-images'>
          <img src={edina} alt='Edina' className='person-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
