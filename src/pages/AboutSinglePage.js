import React from 'react';
import img from '../img/about-3.jpg';

import Title from '../components/Title';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { FaLaptopCode } from 'react-icons/fa';
import { FaUsersCog } from 'react-icons/fa';

export default function AboutSinglePage() {
  return (
    <>
      <Title title='about me' />
      <section className='about-single'>
        <div className='about-center'>
          <article className='about-single-img'>
            <img src={img} alt='about me' className='about-single-photo' />
          </article>
          <article className='about-single-info'>
            <p>
              I'm Edina Kanlić, mathematician with master degree in Applied
              Mathematics. I enjoy learning new skills daily and I'm dedicated
              to work. I have a passion for coding and creating responsive
              websites. I'm looking forward to my Front End developer career.
            </p>
          </article>
        </div>
      </section>

      <section className='about-skills'>
        <article className='technical-skills'>
          <FaLaptopCode className='icon' />
          <h3>technical skills</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS3</li>
            <li>CSS Flexbox</li>
            <li>CSS Grid Layout</li>
            <li>Bootstrap 4</li>
            <li>C++</li>
            <li>LaTeX</li>
            <li>Microsoft Office</li>
          </ul>
        </article>
        <article className='other-skills'>
          <FaUsersCog className='icon' />
          <h3>other skills</h3>
          <ul>
            <li>time menagement</li>
            <li>detail oriented</li>
            <li>problem solving</li>
            <li>communication & teamwork</li>
            <li>teaching</li>
          </ul>
        </article>
      </section>
      <div className='btn-container'>
        <Link to='/' className='btn-secondary'>
          back to home
        </Link>
      </div>
      <Contact />
    </>
  );
}
