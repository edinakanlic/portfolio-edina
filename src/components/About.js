import React from 'react';
import img from '../img/person-1.jpg';

import Title from './Title';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about' className='about'>
      <Title title='about me' />
      <div className='about-center'>
        <article className='about-img'>
          <img src={img} alt='about me' className='about-photo' />
        </article>
        <article className='about-info'>
          <p>
            I'm Edina Kanlić, mathematician with master degree in Applied
            Mathematics. I enjoy learning new skills daily and I'm dedicated to
            work. I have a passion for coding and creating responsive websites.
            I'm looking forward to my Front End developer career.
          </p>

          <Link to='/about' className='btn-secondary'>
            read more
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
